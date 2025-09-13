import * as z from "zod";

export const InstagramUsernameSchema = z.object({
  username: z.string(),
});

export type InstagramUsername = z.infer<typeof InstagramUsernameSchema>;
