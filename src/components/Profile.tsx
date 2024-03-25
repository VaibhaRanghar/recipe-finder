import React from "react";
import Image from "next/image";

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
  return (
    <div className="h-max p-2 bg-orange-400 w-max">
      <Image src={img} width={100} height={100} alt="food image" />
      <h2>{name}</h2>
      <p>{desc}</p>
      <h4>{tags}</h4>
    </div>
  );
}
