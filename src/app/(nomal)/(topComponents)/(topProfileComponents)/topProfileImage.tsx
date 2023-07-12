import Image from "next/image";

export function TopProfileImage() {
  return (
    <div className="flex w-2/4 justify-center p-10 max-lg:w-full max-lg:pb-0">
      <Image
        src="/profile-image.jpg"
        width={400}
        height={500}
        alt="photo"
        className="h-[600px] w-auto min-w-[249px] py-5"
        priority={true}
      ></Image>
    </div>
  );
}
