import React from "react";
import WorkflowButton from "./_components/workflow-button";
import Workflows from "./_components";

type Props = {};

const Workflow = (props: Props) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="w-full flex justify-between items-center text-xl md:text-3xl sticky top-0 right-0 left-0 z-[10] p-4 bg-background/50 backdrop-blur-lg border-b gap-8">
          <span>Workflow</span>

          <WorkflowButton />
        </div>
        <div className=" overflow-auto h-[85vh] pb-14 md:pb-8 px-8">
          <Workflows />
        </div>
      </div>
    </>
  );
};

export default Workflow;
