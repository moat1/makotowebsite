import Link from "next/link";

type Props = {
  href: string;
  name: string;
};

export function Btn({ href, name }: Props) {
  return (
    <div className="flex justify-center p-10">
      <Link
        href={href}
        className="border-2 border-black bg-black px-10 py-3 text-white hover:bg-white hover:text-black"
      >
        {name}
      </Link>
    </div>
  );
}
