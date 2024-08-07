import Image from "next/image";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="min-w-full min-h-screen ">{children}</div>{" "}
    </main>
  );
}
