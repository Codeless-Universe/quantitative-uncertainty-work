import { ConfettiHelper } from "@/pkgs/base/helper/ConfettiHelper";
import { useRef, useState } from "react";
import "./poker.css";
import { User } from "@nextui-org/react";
import SVGWrap from "@/pkgs/base/components/icon/SVGWrap";
import SVGMapper from "@/pkgs/base/components/icon/SVGMapper";

export function AgilePoker(props: { hours: string; msg: string; username?: string; userDescription?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [canClose, setCanClose] = useState(true);
  const dom = useRef<HTMLDivElement | null>(null);

  const user = (
    <User
      name={<div className="text-gray-700">{props.username}</div>}
      description={<div className="text-gray-500">{props.userDescription}</div>}
      avatarProps={{
        name: props.username,
        color: "primary",
      }}
    />
  );

  return (
    <div
      className={["poker cursor-pointer select-none", isOpen ? "flipped" : ""].join(" ")}
      onClick={() => {
        setIsOpen(!isOpen);
        ConfettiHelper.showConfetti(dom.current);
      }}
    >
      <div className="poker-inner">
        <div className="poker-face front rounded-md bg-blue-200 shadow-medium">
          <div className="flex flex-col items-center justify-center gap-4 text-gray-700">
            <div>{user}</div>
          </div>
        </div>
        <div className="poker-face back relative rounded-md bg-blue-400 shadow-medium" ref={dom}>
          <div className={`absolute left-0 right-0 top-0 p-4 ${canClose ? "" : "hidden"}`}>
            <div className="flex w-full flex-row">
              <div className="grow">{user}</div>
              <div className="w-[20px]">
                <SVGWrap svg={SVGMapper.materialFlipCameraAndroidFilled} />
              </div>
            </div>
          </div>
          <div className="px-2 pt-4 text-center">
            <div className="text-2xl">{props.hours}</div>
            <div className="mt-2 text-xs text-gray-300">{props.msg}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
