import NavBar from "@/components/NavBar";
import { RecipesProvider } from "@/context/RecipesContext";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-white min-w-full ">
        <NavBar fixed={false} />
        <h1 className="text-8xl text-center font-bold text-zinc-900 p-20">
          RECIPES
        </h1>
        {children}
      </div>
    </>
  );
}
