import {
  Breadcrumbs,
  BreadcrumbItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { api } from "@/pkgs/trpc/react";
import { useRouterHelper } from "@/pkgs/base/helper/useRouterHelper";
import { useParams } from "next/navigation";
import EmptyWrap from "@/pkgs/base/layout/base/EmptyWrap";

export default function BreadcrumbNav() {
  const query = api.project.myProjects.useQuery({});
  const params = useParams<{ projectId: string }>();

  if (query.isLoading) {
    return <div>loading</div>;
  }

  const currentSelected = () => {
    let retItem: typeof query.data = [];
    query.data?.forEach((item) => {
      if (item.id == params.projectId) {
        retItem?.push(item);
      }
    });
    return retItem[0];
  };

  return (
    <Breadcrumbs
      itemClasses={{
        item: "px-2",
        separator: "px-0",
      }}
    >
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/my/project">My Projects</BreadcrumbItem>
      <BreadcrumbItem
        classNames={{
          item: "px-0",
        }}
      >
        <Dropdown>
          <DropdownTrigger>
            <Button
              className="h-6 pr-2 text-small"
              endContent={<ChevronDownIcon className="text-default-500" />}
              radius="full"
              size="sm"
              variant="light"
            >
              {currentSelected()?.name}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Routes" items={query.data} disabledKeys={[params.projectId]}>
            {(item) => {
              return (
                <DropdownItem key={item.id} href={`/project/${item.id}`}>
                  {item.name}
                </DropdownItem>
              );
            }}
          </DropdownMenu>
        </Dropdown>
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}
