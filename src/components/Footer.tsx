import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex justify-between flex-wrap">
      <Image src={"/Logo.png"} alt="logo" height={200} width={400} />
      <div className="font-bold p-10">
        <p>All the data used is open source data.</p>
        <p>
          You can access it from this link{" "}
          <Link href={"https://www.themealdb.com"}>
            https://www.themealdb.com
          </Link>
        </p>
      </div>
    </div>
  );
}
