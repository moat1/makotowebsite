import { TopProfileImage } from "./(topProfileComponents)/topProfileImage";
import { TopProfileInfo } from "./(topProfileComponents)/topProfileInfo";
import { TopProfileMessage } from "./(topProfileComponents)/topProfileMessage";

export function TopProfile() {
  return (
    <div className="flex min-h-[30vh] justify-around px-10 max-lg:flex-col max-sm:px-0">
      {/* プロフィール写真 */}
      <TopProfileImage />
      {/* プロフィール情報 */}
      <TopProfileInfo />
      {/* メッセージ */}
      <TopProfileMessage />
    </div>
  );
}
