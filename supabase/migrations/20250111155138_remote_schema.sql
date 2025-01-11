alter table "public"."predictions" alter column "created_at" set not null;

alter table "public"."predictions" alter column "is_anonymous" set default false;

alter table "public"."predictions" alter column "is_anonymous" set not null;

alter table "public"."predictions" alter column "updated_at" set not null;

alter table "public"."profiles" alter column "updated_at" set data type date using "updated_at"::date;

alter table "public"."profiles" alter column "username" set not null;

alter table "public"."questions" drop column "last_activity_at";

alter table "public"."questions" drop column "last_updated_at";

alter table "public"."questions" alter column "allow_anonymous_predictions" set default false;

alter table "public"."questions" alter column "allow_anonymous_predictions" set not null;

alter table "public"."questions" alter column "created_at" set not null;

alter table "public"."questions" alter column "description" set not null;

alter table "public"."questions" alter column "is_active" set default true;

alter table "public"."questions" alter column "is_active" set not null;

alter table "public"."questions" alter column "show_prediction_count" set default false;

alter table "public"."questions" alter column "show_prediction_count" set not null;

alter table "public"."questions" alter column "total_predictions" set default 0;

alter table "public"."questions" alter column "total_predictions" set not null;

alter table "public"."questions" alter column "view_count" set default 0;

alter table "public"."questions" alter column "view_count" set not null;

alter table "public"."questions" alter column "visibility" set default 'public'::visibility_type;

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.decrement_prediction_count()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$BEGIN
  UPDATE public.questions
  SET total_predictions = total_predictions - 1
  WHERE id = OLD.question_id;

  RETURN OLD;
END;$function$
;

CREATE OR REPLACE FUNCTION public.get_predictions_count(question_id uuid)
 RETURNS integer
 LANGUAGE plpgsql
AS $function$ declare result int; begin select count(*) into result from predictions where question_id = $1; return result; end; $function$
;

CREATE OR REPLACE FUNCTION public.update_prediction_count()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
BEGIN
  UPDATE public.questions
  SET total_predictions = total_predictions + 1
  WHERE id = NEW.question_id;

  RETURN NEW;
END;
$function$
;

CREATE TRIGGER after_prediction_insert AFTER INSERT ON public.predictions FOR EACH ROW EXECUTE FUNCTION update_prediction_count();


