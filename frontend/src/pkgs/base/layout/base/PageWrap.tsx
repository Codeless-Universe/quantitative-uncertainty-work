import { Skeleton } from "@nextui-org/react";
import { LayoutStore } from "../helper/LayoutHelper";
import EmptyWrap from "./EmptyWrap";

export default function PageWrap({
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  loadingDom?: React.ReactNode;
  isEmpty?: boolean;
  emptyDom?: React.ReactNode;
}) {
  let { maxWidth_tailwindclass } = LayoutStore;
  return (
    <div className={["flex w-full max-w-[100vw] items-center justify-center"].join(" ")}>
      <div className={["w-full px-6 pt-6", maxWidth_tailwindclass, props.className].join(" ")}>
        <EmptyWrap
          isLoading={props.isLoading}
          loadingDom={props.loadingDom}
          isEmpty={props.isEmpty}
          emptyDom={props.emptyDom}
        >
          {props.children}
        </EmptyWrap>
      </div>
    </div>
  );
}
