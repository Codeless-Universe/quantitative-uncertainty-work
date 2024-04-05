import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1), introduce: z.string().optional() }))
    .mutation(async ({ input, ctx }) => {
      return;
    }),
});
