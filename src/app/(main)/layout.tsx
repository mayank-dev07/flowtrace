import React, { ReactNode } from "react";
import Sidebar from "@/components/sidebar";
import Infobar from "@/components/infobar/page";

type Props = { children: ReactNode };

const Layout = (props: Props) => {
  return (
    <>
      <div className="flex overflow-hidden h-screen">
        <Sidebar />
        <div className="w-full">
          <Infobar />
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Layout;
