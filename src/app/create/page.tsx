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
  const [imageFile, setImageFile] = useState<string | Blob>();
  const [page, setPage] = useState(1);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) {
      return;
    }

    const data = new FormData();
    const eventTarget = e.target as HTMLFormElement;

    const nameInput = eventTarget.elements.namedItem(
      "name"
    ) as HTMLInputElement;
    const descriptionInput = eventTarget.elements.namedItem(
      "description"
    ) as HTMLInputElement;
    const urlInput = eventTarget.elements.namedItem("url") as HTMLInputElement;

    data.append("image", imageFile);
    data.append("name", nameInput.value);
    data.append("description", descriptionInput.value);
    data.append("url", urlInput.value);
    try {
      const res = await fetch("api/upload", {
        method: "POST",
        body: data,
      });

      console.log(res);

      if (res.ok) {
        const image = await res.json();
        setImageUrl(image.filePath);
        eventTarget.myfile.value = "";
        nameInput.value = "";
        descriptionInput.value = "";
        urlInput.value = "";
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

      <label htmlFor="description">How to make ?</label>
      <textarea
        name="description"
        className="h-60"
        required
        placeholder="Instructions "
      />

      <label htmlFor="Url">
        Link to the detailed page of your recipe (If there any).
      </label>
      <input type="text" name="url" size={40} placeholder="Url" />

      <label htmlFor="myfile">Select an image of your recipe.</label>
      <input
        type="file"
        name="myfile"
        required
        onChange={(e) => {
          if (e.target.files?.length) return setImageFile(e.target.files[0]);
        }}
      />

      <button
        className="bg-fuchsia-500 mt-10 shadow-lg shadow-fuchsia-700 text-white w-80 place-self-center p-3 rounded-full"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
