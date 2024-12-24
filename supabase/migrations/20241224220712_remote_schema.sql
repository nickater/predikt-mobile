create table "public"."predictions" (
    "id" uuid not null default gen_random_uuid(),
    "user_id" uuid not null,
    "question_id" uuid not null,
    "prediction" text not null,
    "created_at" timestamp with time zone default now(),
    "updated_at" timestamp with time zone default now(),
    "is_anonymous" boolean
);


create table "public"."questions" (
    "id" uuid not null default gen_random_uuid(),
    "author_id" uuid not null,
    "created_at" timestamp with time zone default now(),
    "title" text not null,
    "description" text,
    "allow_anonymous_predictions" boolean,
    "deadline" timestamp with time zone not null,
    "is_active" boolean,
    "last_activity_at" timestamp with time zone,
    "last_updated_at" timestamp with time zone,
    "show_prediction_count" boolean,
    "total_predictions" integer,
    "view_count" integer,
    "visibility" visibility_type not null
);


CREATE UNIQUE INDEX predictions_pkey ON public.predictions USING btree (id);

CREATE UNIQUE INDEX questions_pkey ON public.questions USING btree (id);

alter table "public"."predictions" add constraint "predictions_pkey" PRIMARY KEY using index "predictions_pkey";

alter table "public"."questions" add constraint "questions_pkey" PRIMARY KEY using index "questions_pkey";

alter table "public"."predictions" add constraint "fk_question" FOREIGN KEY (question_id) REFERENCES questions(id) not valid;

alter table "public"."predictions" validate constraint "fk_question";

alter table "public"."predictions" add constraint "fk_user" FOREIGN KEY (user_id) REFERENCES profiles(id) not valid;

alter table "public"."predictions" validate constraint "fk_user";

alter table "public"."questions" add constraint "fk_author" FOREIGN KEY (author_id) REFERENCES profiles(id) not valid;

alter table "public"."questions" validate constraint "fk_author";

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


