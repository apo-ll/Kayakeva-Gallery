import Image from "next/image";
import { Icons } from "./icons";

export function Header() {
  return (
    <div className=" overflow-hidden relative items-center  rounded-[20px] lg:h-[500px] sm:h-[580px] h-[580px] w-full">
      <Image
        src="/header.jpg"
        fill
        alt="header"
        className="object-cover h-full w-full"
      />

      <div className="absolute flex py-4 lg:gap-[63px] gap-[55px]  flex-col  top-0 bottom-0 right-0 lg:pl-8 pl-3 md:pl-4 left-0 *:text-white p">
        <Image
          src="/logo.png"
          width={182}
          height={90}
          alt="logo"
          className="lg:w-full sm:w-1/3 w-1/3"
        />
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-balance lg:w-2/3  ">
          <span className="text-yellow-300 font-semibold">
            Offer!! Offer!!{" "}
          </span>
          Buy 6+ items, Get a Surprise Gift!
        </h1>
        <div className="flex lg:flex-row sm:flex-col md:flex-col flex-col lg:justify-between">
          <div className="flex flex-col gap-3 *:lg:text-4xl *:text-xl">
            <p className=" flex flex-row gap-3 items-center  text-gray-100 ">
              <span>Cover only</span> →{" "}
              <span className="line-through flex items-center">
                600 <span className="lg:text-sm text-xs">KES</span>
              </span>{" "}
              <span>
                {" "}
                Now 500<span className="text-sm">KES</span>
              </span>
            </p>
            <p className=" flex flex-row gap-3 items-center  text-gray-100 ">
              <span className="w-fit">Cover + Insert</span>→{" "}
              <span className="line-through flex items-center ">
                1200<span className="text-sm">KES</span>
              </span>
              <span>
                {" "}
                Now 1000<span className="text-sm">KES</span>
              </span>
            </p>
          </div>
          <div className="flex flex-col lg:items-center sm:items-start pt-3 items-start gap-1 text-center lg:text-2xl sm:text-xl text-xl pr-5">
            <div className="flex flex-row gap-2">
              <h3 className="underline font-semibold">PAYBILL:</h3>
              <h4 className="lg:text-3xl"> 247247</h4>
            </div>
            <div className="flex flex-row gap-2">
              <h4 className="underline font-semibold">Till/ Account No : </h4>
              <h3 className="lg:text-3xl">260444</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
