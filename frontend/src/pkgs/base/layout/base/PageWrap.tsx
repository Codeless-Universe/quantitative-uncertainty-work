import { Skeleton } from "@nextui-org/react";
import { LayoutStore } from "../helper/LayoutHelper";

export default function PageWrap({
  isLoading = false,
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
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  loadingDom?: React.ReactNode;
}) {
  let { maxWidth_tailwindclass } = LayoutStore;
  return (
    <div className={["flex w-full max-w-[100vw] items-center justify-center"].join(" ")}>
      <div className={["w-full px-6 pt-6", maxWidth_tailwindclass, props.className].join(" ")}>
        {(() => {
          if (isLoading) {
            return loadingDom;
          }
          return props.children;
        })()}
      </div>
    </div>
  );
}
