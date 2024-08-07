import Image from "next/image";
import "./globals.css";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar fixed={true} />
      <div className="h-max  bg-red-500 text-yellow-400">
        <Image
          src={"/recipe-hero.jpg"}
          alt={"Recipes wallpaper"}
          width={1700}
          height={700}
          className="min-w-full"
        />{" "}
      </div>
    </>
  );
}
