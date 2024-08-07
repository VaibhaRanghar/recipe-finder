"use client";

import GetData from "@/components/GetData";
import Image from "next/image";
import React from "react";
import Loading from "./loading";

export default function ProductsPage({ params }: { params: { id: string } }) {
  const data = GetData();
  const product = data?.meals
    .filter((meal) => {
      return meal.id === params.id ? meal : false;
    })
    .pop();
  return (
    <>
      {product ? (
        <div className="ml-20 mr-20 pt-10">
          <div className="box-content m-10 h-max pb-10 text-black flex">
            <Image
              src={product?.thumbnail || ""}
              alt="prodImage"
              width={500}
              height={500}
              className=" w-screen max-h-[500px]"
            />
            <div className="flex flex-col gap-2 p-10">
              <h1 className="text-5xl font-bold pl-5">{product?.meal}</h1>
              <div className="p-5 ">
                <p className="font-semibold pb-3 text-2xl">How To Make {product?.meal}?</p>
                <p className="text-wrap">{product?.instructions}</p>
              </div>
              <p className="font-semibold text-lg pl-5">Want to know more about delicious {product?.meal}? </p>
              <a href={product?.source} className="p-5">
                {
                  <button className="bg-green-600 p-2 rounded-md hover:bg-green-800 shadow-2xl drop-shadow-2xl">
                    Know more
                  </button>
                }
              </a>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
