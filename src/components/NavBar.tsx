import Link from "next/link";
import React from "react";

export default function NavBar({ fixed }: { fixed: boolean }) {
  return (
    <div
      className={`p-2 bg-transparent  ${
        fixed ? "fixed top-0 left-0" : "h-max"
      }`}
    >
      <div className="flex gap-[75vw] text-xl">
        <Link className=" p-2 min-w-max " href={"/"}>
          Recipe Finder
        </Link>
        <div className="p-2 flex gap-4">
          <Link className=" p-2 hover:bg-cyan-700" href={"/"}>
            Home
          </Link>
          <Link className=" p-2 hover:bg-cyan-700" href={"/Search"}>
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
