"use client";
import Search from "@/components/Search";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-max w-max p-5 bg-white text-cyan-950">
      <Link href={"/Search"}>Explore</Link>
      <h1>This is the home page of this next JS app!🎃</h1>
    </div>
  );
}
