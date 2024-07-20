"use client";

import GetData from "@/components/GetData";
import Image from "next/image";
import React from "react";

export default function ProductsPage({ params }: { params: { id: string } }) {
  const data = GetData();
  const product = data?.meals
    .filter((meal) => {
      return meal.id === params.id ? meal : false;
    })
    .pop();
  console.log(product?.thumbnail || "");
  console.log();
  return (
    <div className="w-full p-10 h-max bg-red-700 flex">
      <Image
        src={product?.thumbnail || ""}
        alt="prodImage"
        width={500}
        height={500}
      />
      <div className="flex flex-col gap-2 p-10">
        <h1 className="text-4xl font-bold">{product?.meal}</h1>
        <div className="p-5">
          <p>How To Make {product?.meal}?</p>
          <p className="text-wrap">{product?.instructions}</p>
        </div>
        <p>Want to know more about delicious {product?.meal}? </p>
        <p>Click in the button below </p>
        <a href={product?.source}>
          {
            <button className="bg-green-600 p-2 rounded-md hover:bg-green-800 shadow-2xl drop-shadow-2xl">
              Know more
            </button>
          }
        </a>
      </div>
    </div>
  );
}
