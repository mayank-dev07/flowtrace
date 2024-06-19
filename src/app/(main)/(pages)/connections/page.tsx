import { CONNECTIONS } from "@/lib/constant";
import React from "react";
import ConnectionCard from "./_components/connection-card";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl md:text-3xl sticky top-0 right-0 left-0 z-[10] p-4 bg-background/50 backdrop-blur-lg flex items-center border-b">
          <span>Connections</span>
        </h1>
        <div className=" overflow-auto h-[85vh] pb-14 md:pb-8 px-4 md:px-8">
          <div className="relative flex flex-col gap-4">
            <section className="flex flex-col gap-4 p-4 md:p-6 text-muted-foreground">
              Connect all your apps directly from here. You may need to connect
              these apps regularly to refresh verification
              {CONNECTIONS.map((connection) => (
                <ConnectionCard
                  key={connection.title}
                  description={connection.description}
                  title={connection.title}
                  icon={connection.image}
                  type={connection.title}
                  connected={true}
                />
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
