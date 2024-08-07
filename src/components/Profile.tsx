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
    <div className=" max-h-fit flex flex-col justify-between items-start min-h-[600px] min-w-72 w-72  m-4 bg-[#360e5100] w-70 shadow-lg shadow-cyan-700/50 rounded-md font-medium hover:scale-105 duration-300">
      <div className="w-full">
        <Image
          className="rounded-2xl w-full p-2 "
          src={img}
          width={550}
          height={500}
          alt="food image"
        />
        <h1 className="mt-4 ml-4 text-2xl font-bold">
          {name.length > 30 ? name.slice(0, 30) + ".." : name}
        </h1>
        <p className="mt-4 ml-4">
          {desc.length > 100
            ? desc[0]?.toUpperCase() + desc.slice(1, 200) + "..."
            : desc}{" "}
        </p>
        {/* <div className="overflow-hidden whitespace-nowrap text-ellipsis mt-4">
        <Link href={tags}>{tags}</Link>
      </div> */}
      </div>
      <button
        className="bg-yellow-400 p-2 m-4  hover:bg-yellow-500 border-l-4 border-yellow-500"
        onClick={() => {
          router.push(`/Explore/product/${id}`);
        }}
      >
        View Details
      </button>
    </div>
  );
}
