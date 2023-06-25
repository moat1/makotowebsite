"use client";

import AccountCard from "@/components/accountCard";

export default function Account() {
  return (
    <main className="m-auto text-gray-800">
      <div className="px-20 max-sm:px-5">
        <h1 className="flex justify-center p-3 text-xl font-bold text-black">Account</h1>
        <div className="p-10 max-sm:px-5">
          <h2 className="flex justify-center py-5 font-bold">概要</h2>
          <p>このページでは私が所有しているアカウントの一覧をまとめています。</p>
          <br></br>
          <p>下のカードをクリックするとアカウントのリンクへ飛ぶことが出来ます。</p>
        </div>
      </div>
      <AccountCard />
    </main>
  );
}
