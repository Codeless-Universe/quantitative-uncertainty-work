import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { FirebaseAdminHelper } from "@/pkgs/firebase-admin/FirebaseAdminHelper";

let post = {
  id: 1,
  name: "Hello World",
};

export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1), introduce: z.string().optional() }))
    .mutation(async ({ input }) => {
      const res = await FirebaseAdminHelper.db
        .collection("project")
        .add({ name: input.name, introduce: input.introduce });
      return res.id;
    }),

  getLatest: publicProcedure.query(() => {
    return post;
  }),
});
