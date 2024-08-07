import NavBar from "@/components/NavBar";
import { RecipesProvider } from "@/context/RecipesContext";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className=" min-w-full bg-gradient-to-t from-cyan-300 to-cyan-50">
        <NavBar fixed={false} />
        {children}
      </div>
    </>
  );
}
