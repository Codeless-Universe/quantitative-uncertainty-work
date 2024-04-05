"use client";
import PageWrap from "@/pkgs/base/layout/base/PageWrap";
import { api } from "@/pkgs/trpc/react";
import { useState } from "react";

export default function Home(props: {}) {
  const [reloadAt, setReloadAt] = useState(0);
  const query = api.project.myProjects.useQuery({});

  return (
    <PageWrap className="" isLoading={query.isLoading}>
      {JSON.stringify(query.data)}
    </PageWrap>
  );
}
