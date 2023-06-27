"use client";

import AccountCard from "@/components/accountCard";

export default function Account() {
  return (
    <main className="m-auto text-gray-800">
      <div className="px-20 max-sm:px-5">
        <h1 className="flex justify-center p-3 text-3xl  text-black">Account</h1>
        <div className="p-10 max-sm:px-5">
          <h2 className="py-5 text-xl">概要</h2>
          <p>このページでは私が所有しているアカウントの一覧をまとめています。</p>
          <br></br>
          <p>下のカードをクリックするとアカウントのリンクへ飛ぶことが出来ます。</p>
        </div>
      </div>
      <AccountCard />
    </main>
  );
}
