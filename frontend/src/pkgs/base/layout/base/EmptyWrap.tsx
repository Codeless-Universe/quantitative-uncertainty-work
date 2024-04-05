import { Skeleton } from "@nextui-org/react";

export default function EmptyWrap({
  isLoading = false,
  isEmpty = false,
  loadingDom = (
    <div className="flex max-w-[200px] flex-col gap-3">
      <Skeleton className="w-3/5 rounded-lg">
        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
      </Skeleton>
      <Skeleton className="w-4/5 rounded-lg">
        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
      </Skeleton>
      <Skeleton className="w-2/5 rounded-lg">
        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
      </Skeleton>
    </div>
  ),
  emptyDom = <div>Empty</div>,
  ...props
}: {
  children?: React.ReactNode;
  // className?: string;
  isLoading?: boolean;
  loadingDom?: React.ReactNode;
  isEmpty?: boolean;
  emptyDom?: React.ReactNode;
}) {
  if (isLoading) {
    return loadingDom;
  }
  if (isEmpty) {
    return emptyDom;
  }
  return props.children;
}
