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
      await db.project_member.create({
        data: {
          accountId: ctx.user.id,
          projectId: res.id,
          role: "OWNER",
        },
      });
      return res;
    }),
  myProjects: publicProcedure
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
