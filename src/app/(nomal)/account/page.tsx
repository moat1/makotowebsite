import AccountCard from "@/app/(nomal)/account/accountCard";

import { AccountAbout } from "./accountAbout";

export default function Account() {
  return (
    <main className="m-auto">
      <div className="px-20 max-sm:px-5">
        <h1 className="flex justify-center p-3 text-3xl  text-strong-color">Account</h1>
        <AccountAbout />
      </div>
      <AccountCard />
    </main>
  );
}
