import { TechAbout } from "./techAbout";
import { TechInfo } from "./techInfo";

export default function Tech() {
  return (
    <main className="m-auto">
      <div className="px-20 max-sm:px-5">
        <h1 className="flex justify-center p-3 text-3xl text-black">Tech</h1>
        <TechAbout />
      </div>
      <TechInfo />
    </main>
  );
}
