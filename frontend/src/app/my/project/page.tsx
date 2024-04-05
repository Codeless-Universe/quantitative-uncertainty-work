"use client";
import EmptyWrap from "@/pkgs/base/layout/base/EmptyWrap";
import PageWrap from "@/pkgs/base/layout/base/PageWrap";
import { api } from "@/pkgs/trpc/react";
import { Button, Card, CardBody } from "@nextui-org/react";
import { useState } from "react";

export default function Home(props: {}) {
  const [reloadAt, setReloadAt] = useState(0);
  const query = api.project.myProjects.useQuery({});

  return (
    <PageWrap className="" isLoading={query.isLoading}>
      <div className="mb-2 flex flex-row items-center justify-center">
        <div className="grow text-small text-default-500">My Projects</div>
        <Button color="primary">New +</Button>
      </div>
      <EmptyWrap isEmpty={query.data?.length == 0}>
        {query.data?.map((item, index) => {
          return (
            <div key={index}>
              <Card>
                <CardBody>
                  <div className="flex flex-col">
                    <p className="text-md">{item.name}</p>
                    <p className="text-small text-default-500">{item.introduce}</p>
                  </div>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </EmptyWrap>
    </PageWrap>
  );
}
