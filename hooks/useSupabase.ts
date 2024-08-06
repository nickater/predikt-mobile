import { supabase } from "@/supabase";
import { useMemo } from "react";

export function useSupabase() {
  const client = useMemo(() => supabase, []);

  return client;
}
