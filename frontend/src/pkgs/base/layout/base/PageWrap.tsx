import { LayoutStore } from "../helper/LayoutHelper";

export default function PageWrap(props: { children?: React.ReactNode; className?: string }) {
  let { maxWidth_tailwindclass } = LayoutStore;
  return (
    <div className={["flex w-full max-w-[100vw] items-center justify-center"].join(" ")}>
      <div
        
        className={["w-full px-6 pt-6", maxWidth_tailwindclass, props.className].join(" ")}
      >
        {props.children}
      </div>
    </div>
  );
}
