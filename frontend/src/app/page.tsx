"use client";
import PageWrap from "@/pkgs/base/layout/base/PageWrap";
import FirebaseTest from "@/pkgs/firebase/FirebaseTest";
import { api } from "@/pkgs/trpc/react";
import { useState } from "react";

export default function Home(props: {}) {
  const [reloadAt, setReloadAt] = useState(0);
  const query = api.post.hello.useQuery({ text: "from tRPC" });

  return <PageWrap className="">{/* <FirebaseTest /> */}Codeless Universe</PageWrap>;
}
