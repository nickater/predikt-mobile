import { getSupabaseClient } from "@/supabase";
import { useMemo } from "react";

export function useSupabase() {
  const client = useMemo(getSupabaseClient, []);

  client.auth.onAuthStateChange((event, session) => {
    // console.log("event", event);
    // console.log("session", session);
  });

  return client;
}
