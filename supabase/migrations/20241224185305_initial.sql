create type "public"."visibility_type" as enum ('public', 'private', 'friends');

create table "public"."predictions" (
    "id" uuid not null default gen_random_uuid(),
    "question_id" uuid not null,
    "user_id" uuid not null,
    "prediction" text not null,
    "created_at" timestamp with time zone default CURRENT_TIMESTAMP,
    "updated_at" timestamp with time zone,
    "is_anonymous" boolean default false
);


create table "public"."questions" (
    "id" uuid not null default gen_random_uuid(),
    "title" character varying(255) not null,
    "description" text,
    "author_id" uuid not null,
    "created_at" timestamp with time zone default CURRENT_TIMESTAMP,
    "deadline" timestamp with time zone not null,
    "is_active" boolean default true,
    "visibility" visibility_type not null default 'public'::visibility_type,
    "total_predictions" integer default 0,
    "view_count" integer default 0,
    "last_updated_at" timestamp with time zone default CURRENT_TIMESTAMP
);


create table "public"."user_profiles" (
    "username" character varying(50) not null,
    "display_name" character varying(100),
    "prediction_count" integer default 0,
    "correct_predictions" integer default 0,
    "accuracy_score" numeric(5,2) default 0.0,
    "created_at" timestamp with time zone default CURRENT_TIMESTAMP,
    "updated_at" timestamp with time zone default CURRENT_TIMESTAMP,
    "id" uuid not null default gen_random_uuid()
);


CREATE INDEX idx_predictions_question ON public.predictions USING btree (question_id);

CREATE INDEX idx_predictions_user ON public.predictions USING btree (user_id);

CREATE INDEX idx_questions_active ON public.questions USING btree (is_active);

CREATE INDEX idx_questions_author ON public.questions USING btree (author_id);

CREATE INDEX idx_questions_deadline ON public.questions USING btree (deadline);

CREATE INDEX idx_questions_visibility ON public.questions USING btree (visibility);

CREATE INDEX idx_user_profiles_username ON public.user_profiles USING btree (username);

CREATE UNIQUE INDEX predictions_pkey ON public.predictions USING btree (id);

CREATE UNIQUE INDEX questions_pkey ON public.questions USING btree (id);

CREATE UNIQUE INDEX user_profiles_id_key ON public.user_profiles USING btree (id);

CREATE UNIQUE INDEX user_profiles_pkey ON public.user_profiles USING btree (id);

CREATE UNIQUE INDEX user_profiles_username_key ON public.user_profiles USING btree (username);

alter table "public"."predictions" add constraint "predictions_pkey" PRIMARY KEY using index "predictions_pkey";

alter table "public"."questions" add constraint "questions_pkey" PRIMARY KEY using index "questions_pkey";

alter table "public"."user_profiles" add constraint "user_profiles_pkey" PRIMARY KEY using index "user_profiles_pkey";

alter table "public"."predictions" add constraint "predictions_question_id_fkey" FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE not valid;

alter table "public"."predictions" validate constraint "predictions_question_id_fkey";

alter table "public"."predictions" add constraint "predictions_user_id_fkey" FOREIGN KEY (user_id) REFERENCES user_profiles(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."predictions" validate constraint "predictions_user_id_fkey";

alter table "public"."questions" add constraint "questions_author_id_fkey" FOREIGN KEY (author_id) REFERENCES user_profiles(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."questions" validate constraint "questions_author_id_fkey";

alter table "public"."user_profiles" add constraint "user_profiles_id_key" UNIQUE using index "user_profiles_id_key";

alter table "public"."user_profiles" add constraint "user_profiles_username_key" UNIQUE using index "user_profiles_username_key";

alter table "public"."user_profiles" add constraint "valid_username" CHECK (((username)::text ~* '^[A-Za-z0-9._-]{3,50}$'::text)) not valid;

alter table "public"."user_profiles" validate constraint "valid_username";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.calculate_trending_score(views integer, predictions integer, shares integer, created_at timestamp with time zone)
 RETURNS numeric
 LANGUAGE plpgsql
 IMMUTABLE
AS $function$
DECLARE
  age_in_hours DECIMAL;
  base_score DECIMAL;
BEGIN
  age_in_hours = EXTRACT(EPOCH FROM (now() - created_at)) / 3600;
  base_score = (predictions * 1.5) + (views * 0.5) + (shares * 2.0);
  RETURN base_score / POW((age_in_hours + 2), 1.5);
END;
$function$
;

CREATE OR REPLACE FUNCTION public.create_user_profile()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
    INSERT INTO user_profiles (username, display_name)
    VALUES (NEW.email, NEW.email); -- Using email as username and display name
    RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.update_timestamp()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.update_user_prediction_stats(user_id uuid, is_correct boolean)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
  UPDATE user_profiles
  SET 
    prediction_count = prediction_count + 1,
    correct_predictions = correct_predictions + CASE WHEN is_correct THEN 1 ELSE 0 END,
    accuracy_score = CASE 
      WHEN prediction_count = 0 THEN 
        CASE WHEN is_correct THEN 100.0 ELSE 0.0 END
      ELSE 
        ((correct_predictions * 100.0) / prediction_count)
      END
  WHERE id = user_id;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.update_user_reputation(user_id uuid, points integer)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
  UPDATE user_profiles
  SET reputation_score = reputation_score + points
  WHERE id = user_id;
END;
$function$
;

grant delete on table "public"."predictions" to "anon";

grant insert on table "public"."predictions" to "anon";

grant references on table "public"."predictions" to "anon";

grant select on table "public"."predictions" to "anon";

grant trigger on table "public"."predictions" to "anon";

grant truncate on table "public"."predictions" to "anon";

grant update on table "public"."predictions" to "anon";

grant delete on table "public"."predictions" to "authenticated";

grant insert on table "public"."predictions" to "authenticated";

grant references on table "public"."predictions" to "authenticated";

grant select on table "public"."predictions" to "authenticated";

grant trigger on table "public"."predictions" to "authenticated";

grant truncate on table "public"."predictions" to "authenticated";

grant update on table "public"."predictions" to "authenticated";

grant delete on table "public"."predictions" to "service_role";

grant insert on table "public"."predictions" to "service_role";

grant references on table "public"."predictions" to "service_role";

grant select on table "public"."predictions" to "service_role";

grant trigger on table "public"."predictions" to "service_role";

grant truncate on table "public"."predictions" to "service_role";

grant update on table "public"."predictions" to "service_role";

grant delete on table "public"."questions" to "anon";

grant insert on table "public"."questions" to "anon";

grant references on table "public"."questions" to "anon";

grant select on table "public"."questions" to "anon";

grant trigger on table "public"."questions" to "anon";

grant truncate on table "public"."questions" to "anon";

grant update on table "public"."questions" to "anon";

grant delete on table "public"."questions" to "authenticated";

grant insert on table "public"."questions" to "authenticated";

grant references on table "public"."questions" to "authenticated";

grant select on table "public"."questions" to "authenticated";

grant trigger on table "public"."questions" to "authenticated";

grant truncate on table "public"."questions" to "authenticated";

grant update on table "public"."questions" to "authenticated";

grant delete on table "public"."questions" to "service_role";

grant insert on table "public"."questions" to "service_role";

grant references on table "public"."questions" to "service_role";

grant select on table "public"."questions" to "service_role";

grant trigger on table "public"."questions" to "service_role";

grant truncate on table "public"."questions" to "service_role";

grant update on table "public"."questions" to "service_role";

grant delete on table "public"."user_profiles" to "anon";

grant insert on table "public"."user_profiles" to "anon";

grant references on table "public"."user_profiles" to "anon";

grant select on table "public"."user_profiles" to "anon";

grant trigger on table "public"."user_profiles" to "anon";

grant truncate on table "public"."user_profiles" to "anon";

grant update on table "public"."user_profiles" to "anon";

grant delete on table "public"."user_profiles" to "authenticated";

grant insert on table "public"."user_profiles" to "authenticated";

grant references on table "public"."user_profiles" to "authenticated";

grant select on table "public"."user_profiles" to "authenticated";

grant trigger on table "public"."user_profiles" to "authenticated";

grant truncate on table "public"."user_profiles" to "authenticated";

grant update on table "public"."user_profiles" to "authenticated";

grant delete on table "public"."user_profiles" to "service_role";

grant insert on table "public"."user_profiles" to "service_role";

grant references on table "public"."user_profiles" to "service_role";

grant select on table "public"."user_profiles" to "service_role";

grant trigger on table "public"."user_profiles" to "service_role";

grant truncate on table "public"."user_profiles" to "service_role";

grant update on table "public"."user_profiles" to "service_role";

CREATE TRIGGER update_timestamp_predictions BEFORE UPDATE ON public.predictions FOR EACH ROW EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER update_timestamp_questions BEFORE UPDATE ON public.questions FOR EACH ROW EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER update_timestamp_user_profiles BEFORE UPDATE ON public.user_profiles FOR EACH ROW EXECUTE FUNCTION update_timestamp();


