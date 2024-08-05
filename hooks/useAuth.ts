import { AuthChangeEvent, AuthUser, Session } from "@supabase/supabase-js";
import { useCallback, useEffect, useState } from "react";
import { useSupabase } from "./useSupabase";

export const useAuth = () => {
  const supabase = useSupabase();
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleAuthChange = useCallback(
    (event: AuthChangeEvent, session: Session | null) => {
      switch (event) {
        case "SIGNED_IN":
          setUser(session?.user || null);
          break;
        case "SIGNED_OUT":
          setUser(null);
          break;
        case "USER_UPDATED":
          setUser(session?.user || null);
          break;
        case "PASSWORD_RECOVERY":
          // Handle password recovery event
          break;
        case "INITIAL_SESSION":
          setUser(session?.user || null);
          break;
        default:
          // Handle other events
          break;
      }
    },
    [],
  );

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      handleAuthChange,
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [supabase]);

  const signIn = useCallback(async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    if (!data) return;

    setUser(data.user);
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    if (!data) return;

    setUser(data.user);
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
  }, []);

  return {
    user,
    signIn,
    signUp,
    signOut,
  };
};
