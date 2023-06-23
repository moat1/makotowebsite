"use client";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full gap-5 px-32 py-16 max-md:justify-center max-sm:flex-col max-sm:px-0 max-sm:py-12">
      {children}
    </div>
  );
};

export default Layout;
