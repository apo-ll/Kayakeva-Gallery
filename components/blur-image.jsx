"use client";

import { cn } from "@/config/utils";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import { Icons } from "./icons";

export default function BlurImage({ image }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <CldImage
          alt=""
          src={image.public_id}
          width={300}
          height={300}
          objectFit="cover"
          className={cn(
            "duration-700 ease-in-out hover:opacity-75",
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h1 className="flex items-center gap-2 font-medium">
        <span className="line-through">Ksh 600</span>
        <Icons.right />
        Ksh 500
      </h1>
    </div>
  );
}
