import Image from "next/image";

export function Header() {
  return (
    <Image
      height={486}
      width={1331}
      src="/header2.png"
      alt="header"
      className="object-cover"
    />
  );
}
