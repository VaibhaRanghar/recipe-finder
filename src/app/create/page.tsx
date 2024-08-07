"use client";

import { File } from "buffer";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";

export default function Create() {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen m-16 gap-5">
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
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [page, setPage] = useState(1);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    const eventTarget = e.target as HTMLFormElement;
    data.append("image", imageFile);
    data.append("name", eventTarget.name.value);
    data.append("description", eventTarget.description.value);
    data.append("url", eventTarget.url.value);

    try {
      const res = await fetch("api/upload", {
        method: "POST",
        body: data,
      });

      console.log(res);

      if (res.ok) {
        const image = await res.json();
        console.log("this is image from res.json");
        console.log(image);
        setImageUrl(image.filePath);
        eventTarget.myfile.value = "";
        eventTarget.name.value = "";
        eventTarget.description.value = "";
        eventTarget.url.value = "";
      }
    } catch (error) {
      console.error("Upload failed in try catch :", error);
    }
  };

  return (
    <form
      onSubmit={handleUpload}
      className=" flex flex-col form w-1/2 min-h-[80%] border border-black rounded-2xl shadow-lg shadow-cyan-600  text-slate-600 bg-gradient-to-b from-cyan-200 to-cyan-100 p-10 "
    >
      <h1 className="text-center text-4xl font-extralight mb-12 text-black ">
        Unleash Your Inner Chef!🧑‍🍳
      </h1>
      <label htmlFor="name">Name of your recipe.</label>
      <input type="text" name="name" required placeholder="Name" />

      <label htmlFor="Url">
        Link to the detailed page of your recipe (If there any).
      </label>
      <input type="text" name="url" size={40} placeholder="Url" />

      <label htmlFor="description">
        How to make ?
      </label>
      <textarea
        name="description"
        className="h-60"
        required
        placeholder="Instructions "
      />

      <label htmlFor="myfile">Select an image of your recipe.</label>
      <input
        type="file"
        name="myfile"
        required
        onChange={(e) => {
          return setImageFile(e.target.files?.[0]);
        }}
      />

      <button className="bg-fuchsia-500 mt-10 shadow-lg shadow-fuchsia-700 text-white w-80 place-self-center p-3 rounded-full" type="submit">
        Submit
      </button>
    </form>
  );
}
