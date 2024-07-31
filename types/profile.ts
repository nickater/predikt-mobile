import z from "zod";
import { Profile } from "./entities";

export const ProfileSchema: z.ZodType<Profile> = z.object({
  avatar_url: z.string().nullable(),
  full_name: z.string().nullable(),
  id: z.string(),
  updated_at: z.string().nullable(),
  username: z.string().nullable(),
});

export type ProfileType = z.infer<typeof ProfileSchema>;
