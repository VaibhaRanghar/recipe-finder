import NavBar from "@/components/NavBar";
import { RecipesProvider } from "@/context/RecipesContext";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className=" min-w-full ">
        <NavBar fixed={false} />
        {children}
      </div>
    </>
  );
}
