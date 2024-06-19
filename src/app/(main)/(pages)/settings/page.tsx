import ProfileForm from "@/components/forms/profile-form";
import React from "react";
import ProfilePicture from "./_components/profile-picture";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

type Props = {};

const Settings = async (props: Props) => {
  const authUser = await currentUser();
  if (!authUser) {
    return null;
  }

  const user = await db.user.findUnique({ where: { clerkId: authUser.id } });

  const removeProfileImage = async () => {
    "use server";
    const response = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        profileImage: "",
      },
    });
    return response;
  };

  const uploadProfileImage = async (image: string) => {
    "use server";
    const response = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        profileImage: image,
      },
    });
    return response;
  };

  const updateUserInfo = async (name: string) => {
    "use server";
    const response = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        name,
      },
    });
    return response;
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl md:text-3xl sticky top-0 right-0 left-0 z-[10] p-4 bg-background/50 backdrop-blur-lg flex items-center border-b">
          <span>Settings</span>
        </h1>
        <div className=" overflow-auto h-[85vh] pb-14 md:pb-8 px-8">
          <div className="pb-4">
            <h2 className="text-2xl font-bold">User Profile</h2>
            <p className="text-base text-white/50">
              Add or update your information
            </p>
          </div>
          <ProfilePicture
            onDelete={removeProfileImage}
            userImage={user?.profileImage || ""}
            onUpload={uploadProfileImage}
          />
          <ProfileForm user={user} onUpdate={updateUserInfo} />
        </div>
      </div>
    </>
  );
};

export default Settings;
