"use client";
import AgileMain from "@/pkgs/agile/AgileMain";
import PageWrap from "@/pkgs/base/layout/base/PageWrap";
import BreadcrumbNav from "../../components/BreadcrumbNav";

export default function Home(props: {}) {
  return (
    <PageWrap className="">
      <BreadcrumbNav />
      <div className="h-4"></div>
      <AgileMain />
    </PageWrap>
  );
}
