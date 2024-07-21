"use client";

import Image from "next/image";
import { useState } from "react";

export default function Create() {
  const [imageFile, setImageFile] = useState<File | null>();
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async (e: React.FormEvent) => {
    
    e.preventDefault();
    const data = new FormData();
    
    if (!imageFile) {
      console.error("No file selected for upload.");
      return;
    }
    
    data.append("file", imageFile);
    
    try {
      const res = await fetch("api/upload", {
        method: "POST",
        body: data,
      });

      console.log(res);
      if (!res.ok) {
        throw new Error("Upload failed in !res.ok");
      }
    } catch (error) {
      console.error("Upload failed in try catch :", error);
    }
  };

  return (
    <div className="bg-[#b57edc] flex p-10 flex-col items-start justify-start gap-5">
      <h1>Create page.</h1>
      <form onSubmit={handleUpload}>
        <label htmlFor="myfile">Select a file:</label>
        <input
          type="file"
          name="myfile"
          onChange={(e) => {
            return setImageFile(e.target.files?.[0]);
          }}
        />
        <button className="bg-green-600" type="submit">
          Upload
        </button>
      </form>
      {imageUrl !== "" ? (
        <Image src={imageUrl} alt="Input Image" width={100} height={100} />
      ) : (
        ""
      )}
    </div>
  );
}
