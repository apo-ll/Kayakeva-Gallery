import Image from "next/image";

export function Header() {
  return (
    <div className=" overflow-hidden relative items-center  rounded-[20px] h-[500px] w-full">
      <Image
        src="/header.jpg"
        fill
        alt="hedaer"
        className="object-cover h-full w-full"
      />
      <div className=" inset-0 absolute bg-orange-500 bg-opacity-30" />
      <div className="absolute flex py-3 gap-[63px]  flex-col  top-0 lg:pl-8 pl-4 md:pl-4 left-0 *:text-white p">
        <Image
          src="/logo.png"
          width={182}
          height={90}
          alt="logo"
          className=""
        />
        <h1 className="lg:text-6xl md:text-5xl text-4xl text-balance lg:w-2/3  ">
          Limited Time: Buy 6+ items, Get a Free 500{" "}
          <span className="text-xl">KES</span> Gift!
        </h1>
        <div className="flex flex-col gap-3">
          <p className="lg:text-3xl text-2xl text-gray-100 line-through">
            600KES
          </p>
          <p className="lg:text-5xl text-4xl">500 KES</p>
        </div>
      </div>
    </div>
  );
}
