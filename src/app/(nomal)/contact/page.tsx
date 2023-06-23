"use client";
export default function Contact() {
  const key = process.env.NEXT_PUBLIC_kEY1;
  return (
    <main className="m-auto px-20 text-gray-800 max-sm:mx-0 max-sm:px-0">
      <h1 className="flex justify-center p-3 text-3xl font-bold text-black">
        コンタクト
      </h1>
      <h2 className="flex justify-center py-5 font-bold">概要</h2>
      <div className="px-10">
        <p>
          コンタクトページです。このページでは下記のフォームから私宛に連絡を取ることが出来ます。質問や当サイトに関するバグの報告などご自由にお使いください。
          <span className="border-b border-red-500 text-red-500">
            返信が必要な場合はメールアドレスをご記入の上、返信することとします。
          </span>
          お間違えのないようお願いします。
        </p>
        <br />
        <p>
          ＊大量のメッセージを送るなどの迷惑行為はおやめくださいますようよろしくお願いします。
        </p>
      </div>

      <div>
        <h2 className="m-5 flex justify-center pt-10 font-bold">フォーム</h2>
        <form action="https://api.staticforms.xyz/submit" method="post" className="m-5">
          <input type="hidden" name="accessKey" value={key} />
          <div className="flex justify-between p-5 max-lg:flex-col max-lg:gap-5 max-sm:p-0">
            <label className="h-10 border-l-4 p-2 text-gray-600">
              タイトル<span className="text-red-400">（必須）</span>
            </label>
            <input
              type="text"
              name="title"
              className="h-10 w-[300px] rounded-md border-2 pl-1 outline-none hover:border-blue-300 max-sm:mb-10 max-sm:w-full"
              required
            />
          </div>
          <div className="flex justify-between p-5 max-lg:flex-col max-lg:gap-5 max-sm:p-0">
            <label className="my-auto h-10 border-l-4 p-2 text-gray-600">
              お名前（任意）
            </label>
            <input
              type="text"
              name="title"
              className="h-10 w-[300px] rounded-md border-2 pl-1 outline-none hover:border-blue-300 max-sm:mb-10 max-sm:w-full"
            />
          </div>
          <div className="flex justify-between p-5 max-lg:flex-col max-lg:gap-5 max-sm:p-0">
            <label className="my-auto mr-5 h-10 border-l-4 p-2 text-gray-600">
              メールアドレス（任意）
            </label>
            <input
              type="email"
              name="email"
              placeholder="返信用"
              className="h-10 w-[300px] rounded-md border-2 pl-1 outline-none hover:border-blue-300 max-sm:mb-10 max-sm:w-full"
            />
          </div>
          <div className="flex justify-between p-5 max-lg:flex-col max-lg:gap-5 max-sm:p-0">
            <label className="my-auto h-40 border-l-4 px-2 py-16 text-gray-600 max-lg:h-10 max-lg:p-2">
              内容<span className="text-red-400">（必須）</span>
            </label>
            <textarea
              className="h-40 w-[300px] rounded-md border-2 pl-1 outline-none hover:border-blue-300 max-sm:mb-10 max-sm:w-full"
              required
            />
          </div>
          <div className="flex justify-center gap-10 p-5">
            <input
              type="submit"
              value="送信"
              className="rounded-xl border border-green-400 bg-green-400 p-3 font-bold text-white hover:bg-white hover:text-green-400"
            />
            <input
              type="reset"
              value="クリア"
              className="rounded-xl border border-red-400 bg-red-400 p-3 font-bold text-white hover:bg-white hover:text-red-400 "
            />
          </div>
        </form>
      </div>
    </main>
  );
}
