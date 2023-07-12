import { TopTechnologyInfo } from "./(topTechnologyComponents)/topTechnologyInfo";
import { TopTechnologyLogo } from "./(topTechnologyComponents)/topTechnologyLogo";

export function TopTechnology() {
  return (
    <div className="flex min-h-[30vh] border-y px-20 max-lg:flex-col max-lg:px-10 max-sm:px-0">
      {/* 技術情報 */}
      <TopTechnologyInfo />
      {/* 技術ロゴ */}
      <TopTechnologyLogo />
    </div>
  );
}
