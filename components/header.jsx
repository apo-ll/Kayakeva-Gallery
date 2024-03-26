import Image from "next/image";
import { Icons } from "./icons";

export function Header() {
  return (
    <div className=" overflow-hidden relative items-center  rounded-[20px] lg:h-[500px] h-[550px] w-full">
      <Image
        src="/header.jpg"
        fill
        alt="hedaer"
        className="object-cover h-full w-full"
      />
      <div className=" inset-0 absolute bg-orange-500 bg-opacity-30" />
      <div className="absolute flex py-4 lg:gap-[63px] gap-[55px]  flex-col  top-0 lg:pl-8 pl-3 md:pl-4 left-0 *:text-white p">
        <Image
          src="/logo.png"
          width={182}
          height={90}
          alt="logo"
          className=""
        />
        <h1 className="lg:text-6xl md:text-5xl text-[40px] text-balance lg:w-2/3  ">
          <span className="text-red-200">Offer!! Offer!! </span>
          Buy 6+ items, Get a Surprise Gift!
        </h1>
        <div className="flex flex-col gap-3 *:lg:text-4xl *:text-2xl">
          <p className=" flex flex-row gap-3 items-center  text-gray-100 ">
            <span>Cover only</span> → <span className="line-through">600</span>{" "}
            <span> Now 500/=</span>
          </p>
          <p className=" flex flex-row gap-3 items-center  text-gray-100 ">
            <span className="w-fit">Cover + Insert</span>→{" "}
            <span className="line-through text-2xl">
              1200 <span> Now 1000/=</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
