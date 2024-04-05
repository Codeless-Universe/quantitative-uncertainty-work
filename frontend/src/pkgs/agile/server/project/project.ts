import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/pkgs/prisma/server/db";

export const projectRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1), introduce: z.string().optional() }))
    .mutation(async ({ input, ctx }) => {
      const res = await db.project.create({
        data: {
          name: input.name,
          introduce: input.introduce,
          createdAccountId: ctx.user.id,
        },
      });
      return res;
    }),
});
