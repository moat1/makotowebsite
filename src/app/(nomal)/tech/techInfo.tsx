export function TechInfo() {
  const TECHNOLOGY = [
    {
      id: 1,
      title: "JavaScript",
      description:
        "Webサイトに動的な動きをつける際に使用するなど、かなり広範囲な用途で使用しています。",
    },
    {
      id: 2,
      title: "TypeScript",
      description:
        "このサイトでもメインで使用しています。型を安全にすることで実行時エラーを防いだり、ドキュメントとしての役割を果たします。",
    },
    {
      id: 3,
      title: "React",
      description:
        "コンポーネントやpropsなどの機能を使用しています。Next.jsと一緒に使う場合がほとんどです。",
    },
    {
      id: 4,
      title: "Next.js",
      description:
        "ルーティングやレンダリング、画像やリンクの最適化などで使用しています。",
    },
    {
      id: 5,
      title: "CSS Modules",
      description:
        "コンポーネントごとにファイルを作ることにより、CSSファイルを一つにまとめる必要性がなくなります。",
    },
    {
      id: 6,
      title: "TailwindCSS",
      description:
        "CSS Modulesのように新たにファイルを作る必要がなく、Reactのようなコンポーネント思考のライブラリと非常に相性が良いと考えています。",
    },
    { id: 7, title: "GitHub", description: "コードの管理に使用しています。" },
    {
      id: 8,
      title: "VSCode",
      description:
        "メインのエディタとして利用しており、プラグインと併用して利用しています。",
    },
    {
      id: 9,
      title: "Vercel",
      description: "制作したWebサイトをデプロイする際に使用しています。",
    },
    {
      id: 10,
      title: "Slack",
      description: "自分が参加しているコミュニティで使用しています。",
    },
  ];

  return (
    <div className="m-10 rounded-3xl px-20 py-10 shadow-2xl  max-sm:px-5">
      {TECHNOLOGY.map((ietm) => {
        return (
          <div className="px-5" key={ietm.id}>
            <h1 className="py-5 text-xl text-strong-color">{ietm.title}</h1>
            <p>{ietm.description}</p>
          </div>
        );
      })}
    </div>
  );
}
