import React, { ReactNode } from "react";
import Sidebar from "@/components/sidebar";

type Props = { children: ReactNode };

const Layout = (props: Props) => {
  return (
    <>
      <div className="flex overflow-hidden ">
        <Sidebar />
        <div className="w-full">{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
