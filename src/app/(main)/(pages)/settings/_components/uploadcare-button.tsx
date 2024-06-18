"use client";

import React, { useState } from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import { useRouter } from "next/navigation";
import "@uploadcare/react-uploader/core.css";

type Props = {
  onUpload: (url: string) => any;
};

const UploadCareButton: React.FC<Props> = ({ onUpload }) => {
  const router = useRouter();
  const [files, setFiles] = useState<any[]>([]);

  const handleChangeEvent = (items: any) => {
    const successfulFiles = items.allEntries.filter(
      (file: any) => file.status === "success"
    );
    setFiles(successfulFiles);

    successfulFiles.forEach((file: any) => {
      onUpload(file.cdnUrl);
      router.refresh();
    });
  };

  return (
    <div>
      <FileUploaderRegular
        onChange={handleChangeEvent}
        pubkey="03b82bb84799d14a75ff"
        imgOnly={true}
      />
      <div>
        {files.map((file: any) => (
          <div key={file.uuid}>
            <img src={file.cdnUrl} alt={file.fileInfo.originalFilename} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadCareButton;
