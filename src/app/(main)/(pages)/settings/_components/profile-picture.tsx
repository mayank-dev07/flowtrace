"use client";
import React from "react";
// import UploadCareButton from "./uploadcare-button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Props = {};

const ProfilePicture = (props: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <p className="text-lg text-white"> Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {true ? (
          <>
            <div className="relative h-full w-1/12">
              <Image src="/1.png" alt="User_Image" fill />
            </div>
            <Button
              //   onClick={onRemoveProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove Logo
            </Button>
          </>
        ) : (
          <></>
          //   <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  );
};

export default ProfilePicture;
