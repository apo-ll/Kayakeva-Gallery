import Image from "next/image";
import Logo from "../public/logo.png";

export default function Navbar() {
  return (
    <nav className="flex justify-center py-3">
      <Image src={Logo} alt="image of logo" width={200} height={200} />
    </nav>
  );
}
