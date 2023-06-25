import TechNav from "@/components/techNav";
import TechTitle from "@/components/techTitle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full gap-5 p-16 max-sm:flex-col max-sm:px-5 max-sm:py-12">
      <TechNav />
      <div className="w-full px-10 py-5">
        <TechTitle />
        {children}
      </div>
    </div>
  );
};

export default Layout;
