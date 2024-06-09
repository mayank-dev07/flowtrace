"use client";

import React, { useState } from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import { useRouter } from "next/navigation";
import "@uploadcare/react-uploader/core.css";

type Props = {
  onUpload: (url: string) => any;
};
const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleChangeEvent = (items: any) => {
    const successfulFiles = items.files.filter(
      (file: any) => file.state === "uploaded"
    );
    setUploadedFiles(successfulFiles.map((file: any) => file.cdnUrl));
    successfulFiles.forEach((file: any) => {
      onUpload(file.cdnUrl);
    });
    router.refresh();
  };
  return (
    <div>
      <FileUploaderRegular
        onChange={handleChangeEvent}
        pubkey="03b82bb84799d14a75ff"
      />

      <div>
        {uploadedFiles.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Uploaded ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadCareButton;
