import NavBar from "@/components/NavBar";
import { DatabaseProvider } from "@/context/DatabaseContext";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-w-full ">
        <NavBar fixed={false} />
        <DatabaseProvider>{children}</DatabaseProvider>
      </div>
    </>
  );
}
