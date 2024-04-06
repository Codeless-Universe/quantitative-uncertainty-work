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

export default function BreadcrumbNav() {
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
              Songs
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Routes">
            <DropdownItem href="#song-1">Song 1</DropdownItem>
            <DropdownItem href="#song2">Song 2</DropdownItem>
            <DropdownItem href="#song3">Song 3</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}
