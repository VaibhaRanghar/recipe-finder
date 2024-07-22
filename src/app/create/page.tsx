"use client";

import { File } from "buffer";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";

export default function Create() {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="   bg-[#424B54] flex p-10 flex-col items-start justify-start gap-5">
      <h1>Create page.</h1>

      <Form setImageUrl={setImageUrl} />

      <div>
        {imageUrl !== "" ? (
          <Image src={imageUrl} alt="Input Image" width={100} height={100} />
        ) : null}
      </div>
    </div>
  );
}

function Form({
  setImageUrl,
}: {
  setImageUrl: Dispatch<SetStateAction<string>>;
}) {
  const [imageFile, setImageFile] = useState<File | null>();

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();

    if (!imageFile) {
      console.error("No file selected for upload.");
      return;
    } else data.append("file", imageFile);

    try {
      const res = await fetch("api/upload", {
        method: "POST",
        body: data,
      });

      console.log(res);
      if (res.ok) {
        const image = await res.json();
        setImageUrl(image.filePath);
      }
    } catch (error) {
      console.error("Upload failed in try catch :", error);
    }
  };

  return (
    <form
      onSubmit={handleUpload}
      className=" bg-[#9B6A6C] flex flex-col p-5 gap-5"
    >
      <label htmlFor="myfile">Select a file:</label>
      <input
        type="file"
        name="myfile"
        onChange={(e) => {
          return setImageFile(e.target.files?.[0]);
        }}
      />

      <label htmlFor="name">Name of your recipe:</label>
      <input type="text" name="name" required placeholder="Name" />

      <label htmlFor="description">
        Provide instructions about your recipe:
      </label>
      <input type="text" name="description" required placeholder="About" />

      <label htmlFor="Url">
        Link to the detailed page of the meal (optional):
      </label>
      <input type="url" name="Url" size={40} placeholder="url" />

      <button className="bg-green-600" type="submit">
        Upload
      </button>
    </form>
  );
}
