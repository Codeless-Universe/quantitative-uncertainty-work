import { LayoutStore } from "../helper/LayoutHelper";

export default function PageWrap({
  isLoading = false,
  loadingDom = <div>Loading</div>,
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
