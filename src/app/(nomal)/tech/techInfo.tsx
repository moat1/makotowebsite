export function TechInfo() {
  // TECH_LOGOは現在、ハードコーディングしているが値の変更の可能性があるため、管理画面作成後に管理画面から値を変更できるようにする。
  const USABLE_TECHNOLOGY = [
    {
      id: crypto.randomUUID(),
      title: "JavaScript",
      description:
        "Webサイトに動的な動きをつける際に使用するなど、かなり広範囲な用途で使用しています。",
    },
    {
      id: crypto.randomUUID(),
      title: "TypeScript",
      description:
        "このサイトでもメインで使用しています。型を安全にすることで実行時エラーを防いだり、コーディング時のドキュメントとしての役割を果たします。",
    },
    {
      id: crypto.randomUUID(),
      title: "React",
      description:
        "コンポーネントやpropsなどの機能を使用しています。Next.jsと一緒に使う場合がほとんどです。",
    },
    {
      id: crypto.randomUUID(),
      title: "Next.js",
      description:
        "ルーティングやレンダリング、画像やリンクの最適化などで使用しています。",
    },
    {
      id: crypto.randomUUID(),
      title: "CSS Modules",
      description:
        "コンポーネントごとにファイルを作ることにより、CSSファイルを一つにまとめる必要性がなくなります。",
    },
    {
      id: crypto.randomUUID(),
      title: "TailwindCSS",
      description:
        "CSS Modulesのように新たにファイルを作る必要がなく、Reactのようなコンポーネント思考のライブラリと非常に相性が良いと考えています。",
    },
    {
      id: crypto.randomUUID(),
      title: "GitHub",
      description: "コードの管理に使用しています。",
    },
    {
      id: crypto.randomUUID(),
      title: "VSCode",
      description:
        "メインのエディタとして利用しており、プラグインと併用して利用しています。",
    },
    {
      id: crypto.randomUUID(),
      title: "Vercel",
      description: "制作したWebサイトをデプロイする際に使用しています。",
    },
    {
      id: crypto.randomUUID(),
      title: "Slack",
      description: "自分が参加しているコミュニティで使用しています。",
    },
  ];

  return (
    <div className="m-10 rounded-3xl px-20 py-10 shadow-2xl  max-sm:px-5">
      {USABLE_TECHNOLOGY.map((value) => {
        return (
          <div className="px-5" key={value.id}>
            <h1 className="py-5 text-xl text-strong-color">{value.title}</h1>
            <p>{value.description}</p>
          </div>
        );
      })}
    </div>
  );
}
