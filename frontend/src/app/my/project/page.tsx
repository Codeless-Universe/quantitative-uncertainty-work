"use client";
import { useRouterHelper } from "@/pkgs/base/helper/useRouterHelper";
import EmptyWrap from "@/pkgs/base/layout/base/EmptyWrap";
import PageWrap from "@/pkgs/base/layout/base/PageWrap";
import { api } from "@/pkgs/trpc/react";
import { Button, Card, CardBody } from "@nextui-org/react";
import { useState } from "react";

export default function Home(props: {}) {
  const [reloadAt, setReloadAt] = useState(0);
  const query = api.project.myProjects.useQuery({});
  const routerHelper = useRouterHelper({});

  return (
    <PageWrap className="" isLoading={query.isLoading}>
      <div className="mb-4 flex flex-row items-end justify-center">
        <div className="grow text-small text-default-500">My Projects</div>
        <Button
          color="primary"
          onPress={() => {
            routerHelper.router.push("/project/edit");
          }}
        >
          New +
        </Button>
      </div>

      <EmptyWrap isEmpty={query.data?.length == 0} className="flex flex-col gap-2">
        {query.data?.map((item, index) => {
          return (
            <div key={index}>
              <Card
                isPressable
                className="w-full cursor-pointer"
                onPress={() => {
                  routerHelper.router.push(`/project/${item.id}/`);
                }}
              >
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
