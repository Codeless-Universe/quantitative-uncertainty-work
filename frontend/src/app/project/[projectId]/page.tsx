"use client";
import PageWrap from "@/pkgs/base/layout/base/PageWrap";
import { api } from "@/pkgs/trpc/react";
import { useState } from "react";
import BreadcrumbNav from "./components/BreadcrumbNav";

export default function Home(props: {}) {
  const [reloadAt, setReloadAt] = useState(0);

  return (
    <PageWrap className="">
      <BreadcrumbNav />
    </PageWrap>
  );
}
