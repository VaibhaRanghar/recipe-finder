import Link from "next/link";
import React from "react";

export default function NavBar({ fixed }: { fixed: boolean }) {
  return (
    <div
      className={`  ${
        fixed
          ? "fixed top-0 left-0  min-w-full bg-transparent"
          : "  bg-indigo-400"
      }`}
    >
      <div className="flex justify-between items-center text-xl">
        <Link className=" p-6 min-w-max " href={"/"}>
          Recipe Finder
        </Link>
        <div className="flex gap-4 mr-2">
          <Link className=" p-6 hover:bg-cyan-700" href={"/"}>
            Home
          </Link>
          <Link className=" p-6 hover:bg-cyan-700 " href={"/Explore"}>
            Explore
          </Link>
          <Link className=" p-6 hover:bg-cyan-700 " href={"/create"}>
            Create
          </Link>
          <Link className=" p-6 hover:bg-cyan-700 " href={"/User"}>
            User
          </Link>
        </div>
      </div>
    </div>
  );
}
