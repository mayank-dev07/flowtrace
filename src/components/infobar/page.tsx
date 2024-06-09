import { Book, Headphones, Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {};

const Infobar = (props: Props) => {
  return (
    <>
      <div className="flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black ">
        <span className="flex items-center rounded-full bg-muted px-4">
          <Search />
          <Input
            placeholder="Quick Search"
            className="border-none bg-transparent focus-visible:!outline-none focus-visible:!ring-0 focus-visible:!ring-offset-0  "
          />
        </span>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Headphones />
            </TooltipTrigger>
            <TooltipContent>
              <p>Contact Support</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Book />
            </TooltipTrigger>
            <TooltipContent>
              <p>Guide</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
};

export default Infobar;
