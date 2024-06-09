import ProfileForm from "@/components/forms/profile-form";
import React from "react";
import ProfilePicture from "./_components/profile-picture";

type Props = {};

const Settings = (props: Props) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl md:text-3xl sticky top-0 right-0 left-0 z-[10] p-4 bg-background/50 backdrop-blur-lg flex items-center border-b">
          <span>Settings</span>
        </h1>
        <div className=" overflow-auto h-[85vh] pb-14 md:pb-8 px-8">
          <div>
            <h2 className="text-2xl font-bold">User Profile</h2>
            <p className="text-base text-white/50">
              Add or update your information
            </p>
          </div>
          <ProfilePicture />
          <ProfileForm
          //    user={user} onUpdate={updateUserInfo}
          />
        </div>
      </div>
    </>
  );
};

export default Settings;
