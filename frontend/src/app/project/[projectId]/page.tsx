"use client";
import PageWrap from "@/pkgs/base/layout/base/PageWrap";
import { api } from "@/pkgs/trpc/react";
import { useState } from "react";

export default function Home(props: {}) {
  const [reloadAt, setReloadAt] = useState(0);

  return <PageWrap className="">11222</PageWrap>;
}
