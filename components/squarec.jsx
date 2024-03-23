import BlurImage from "@/components/blur-image";
import { Squarec } from "@/config/homepage";
import { Icons } from "./icons";
import { Badge } from "./ui/badge";

export default async function SquarecPillows() {
  const images = await Squarec();
  return (
    <div className="">
      <Badge
        variant="outline"
        className="text-xl w-fit  flex items-center gap-2 mb-10 mx-auto"
      >
        Pillows <Icons.chevron /> S & Q Pillows <Icons.chevron /> Color Splash
      </Badge>
      <div className="">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.resources.map((image) => (
            <div key={image.asset_id}>
              <BlurImage image={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
