import "/src/app/globals.css";

import { TopBlog } from "@/app/(nomal)/(topComponents)/topBlog";
import { TopOtherInfo } from "@/app/(nomal)/(topComponents)/topOtherInfo";
import { TopProfile } from "@/app/(nomal)/(topComponents)/topProfile";
import { TopTechnology } from "@/app/(nomal)/(topComponents)/topTechnology";

export default function Home() {
  return (
    <div className="bg-white">
      <TopProfile />
      <TopTechnology />
      <TopBlog />
      <TopOtherInfo />
    </div>
  );
}
