import React from "react";

type Props = {};

const Billing = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="text-xl md:text-3xl sticky top-0 right-0 left-0 z-[10] p-4 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Billing
      </h1>
      <div className=" overflow-auto h-[85vh] pb-14 md:pb-8 px-8"></div>
    </div>
  );
};

export default Billing;
