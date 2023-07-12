import { PortfolioAbout } from "./portfolioAbout";
import { PortfolioCard } from "./portfolioCard";

export default function Portfolio() {
  return (
    <main className="m-auto">
      <div className="px-20 max-sm:px-5">
        <h1 className="flex justify-center p-3 text-3xl text-black">Portfolio</h1>
        <PortfolioAbout />
      </div>
      <PortfolioCard />
    </main>
  );
}
