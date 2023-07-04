import "/src/app/globals.css";

import { TopBlog } from "@/components/topBlog";
import { TopOtherInfo } from "@/components/topOtherInfo";
import { TopProfile } from "@/components/topProfile";
import { TopTechnology } from "@/components/topTechnology";

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
