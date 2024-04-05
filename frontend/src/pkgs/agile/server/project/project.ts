import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/pkgs/prisma/server/db";
import { project } from "@prisma/client";

const queryIsOwner = async (projectId: string, accountId: string) => {
  const res = await db.project_member.findFirst({
    where: {
      projectId,
      accountId,
      role: "OWNER",
    },
  });
  return res !== null;
};

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

  update: publicProcedure
    .input(z.object({ id: z.string(), name: z.string().min(1), introduce: z.string().optional() }))
    .mutation(async ({ input, ctx }) => {
      const isOwner = await queryIsOwner(input.id, ctx.user.id);
      if (!isOwner) {
        return {
          code: 2,
          msg: "Only project owner can update.",
        };
      }
      const res = await db.project.update({
        data: {
          name: input.name,
          introduce: input.introduce,
          createdAccountId: ctx.user.id,
        },
        where: {
          id: input.id,
        },
      });
      return { code: 0, msg: "success" };
    }),

  myProjects: publicProcedure.input(z.object({ status: z.string().optional() })).query(async ({ input, ctx }) => {
    const res = await db.project_member.findMany({
      where: {
        accountId: ctx.user.id,
        deleted: false,
      },
      include: {
        project: true,
      },
    });

    const retList: project[] = [];
    res.forEach((item) => {
      retList.push(item.project);
    });
    return retList;
  }),
});
