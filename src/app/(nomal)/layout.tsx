import Footer from "@/components/footer";

import Header from "../../components/header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="h-[81px]"></div>
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
