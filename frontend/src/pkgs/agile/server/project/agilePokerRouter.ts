import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/pkgs/prisma/server/db";

export const agilePokerRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        projectId: z.string(),
        name: z.string().min(1),
        meetingLink: z.string().optional(),
        task: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const res = await db.project_agile_poker.create({
        data: {
          projectId: input.projectId,
          accountId: ctx.user.id,
          name: input.name,
          meetingLink: input.meetingLink,
          task: input.task,
        },
      });
      return res;
    }),
  getById: publicProcedure.input(z.object({ id: z.string() })).query(async ({ input, ctx }) => {
    const res = await db.project_agile_poker.findUnique({
      where: {
        id: input.id,
        deleted: false,
      },
    });
    return res;
  }),
});
