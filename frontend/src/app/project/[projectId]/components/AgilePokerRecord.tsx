import { useRouterHelper } from "@/pkgs/base/helper/useRouterHelper";
import { Button } from "@nextui-org/react";

export default function AgilePokerRecord() {
  const routerHelper = useRouterHelper({});

  return (
    <div>
      <div className="flex flex-row">
        <div className="grow"></div>
        <Button
          color="primary"
          onPress={() => {
            routerHelper.router.push(routerHelper.path + "/aglie-poker/edit");
          }}
        >
          New
        </Button>
      </div>
      <div>AgilePokerRecord</div>
    </div>
  );
}
