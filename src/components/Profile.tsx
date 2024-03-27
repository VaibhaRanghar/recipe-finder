"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Profile({
  img,
  name,
  desc,
  tags,
}: {
  img: string;
  name: string;
  desc: string;
  tags: string;
}) {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
  }

  return (
    <div className=" min-w-60 w-60 h-[600px] m-2 p-2 bg-orange-400 w-70 rounded-md">
      <Image
        className="rounded-md"
        src={img}
        width={250}
        height={200}
        alt="food image"
      />
      <h1 className="mt-4 text-2xl">{name}</h1>
      <p className="mt-4">{desc.slice(0, 200)} </p>
      <div className="overflow-hidden whitespace-nowrap text-ellipsis mt-4">
        <Link href={tags}>{tags}</Link>
      </div>
    </div>
  );
}
