import Navbar from "@/components/global/Navbar";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import Image from "next/image";
import { clients, products } from "@/lib/constant";
import { HeroParallax } from "@/components/global/connet-parallax";
import { LampComponent } from "@/components/global/lamp";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col min-h-screen w-screen">
      <Navbar />
      <section className="min-h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Button
                  size={"lg"}
                  className="p-8 mb-8 md:mb-0 text-xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold md:my-6">
                  Automate Your Work With Flow Trace
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards items={clients} direction="right" speed="slow" />
      <section className="w-screen">
        <HeroParallax products={products} />
      </section>
      <section className="w-screen">
        <LampComponent />
      </section>
    </main>
  );
}
