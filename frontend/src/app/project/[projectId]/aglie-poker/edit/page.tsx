"use client";
import PageWrap from "@/pkgs/base/layout/base/PageWrap";
import EditForm from "./EditForm";

export default function Home(props: {}) {
  return (
    <PageWrap className="">
      <EditForm />
    </PageWrap>
  );
}
