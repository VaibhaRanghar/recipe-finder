import dynamic from "next/dynamic";

const Data = dynamic(() => import("@/components/GetData"), { ssr: false });
export default function Explore() {
  return (
    <>
      <Data />
    </>
  );
}
