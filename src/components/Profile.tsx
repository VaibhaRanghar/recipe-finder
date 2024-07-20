"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function Profile({
  img,
  id,
  name,
  desc,
  tags,
}: {
  img: string;
  id: string;
  name: string;
  desc: string;
  tags: string;
}) {
  const router = useRouter();
  return (
    <div className="min-w-72 w-72 h-[600px] m-4 bg-[#360e5100] w-70 rounded-md font-medium hover:scale-105 duration-300">
      <Image
        className="rounded-2xl w-full p-2 "
        src={img}
        width={250}
        height={200}
        alt="food image"
      />
      <h1 className="mt-4 text-2xl font-bold">
        {name.length > 30 ? name.slice(0, 30) + ".." : name}
      </h1>
      <p className="mt-4">
        {desc[0]?.toUpperCase() + desc.slice(1, 200) + "..."}{" "}
      </p>
      {/* <div className="overflow-hidden whitespace-nowrap text-ellipsis mt-4">
        <Link href={tags}>{tags}</Link>
      </div> */}
      <button
        className="bg-yellow-400 p-2 mt-4 hover:bg-yellow-500 border-l-4 border-yellow-500"
        onClick={() => {
          router.push(`/Explore/product/${id}`);
        }}
      >
        View Details
      </button>
    </div>
  );
}
