import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Member from "./Member";
import AgilePokerRecord from "./AgilePokerRecord";

export default function ProjectTab() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="AgilePoker" title="Agile poker">
          <AgilePokerRecord />
        </Tab>
        <Tab key="Members" title="Members">
          <Member></Member>
        </Tab>
      </Tabs>
    </div>
  );
}
