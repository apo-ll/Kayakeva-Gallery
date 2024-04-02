import { Squarec } from "@/config/homepage";

import { SqPillow } from "./sqpillow";

export default async function SquarecPillows() {
  const images = await Squarec();
  return (
    <div className="mx-auto max-w-2xl py-4 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col items-center">
      <SqPillow images={images} />
    </div>
  );
}
