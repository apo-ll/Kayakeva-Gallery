import RectanglePillows from "@/components/rectangles";
import SquarecPillows from "@/components/squarec";
import { SquarePillows } from "@/components/squres";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Icons } from "@/components/icons";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <div className="flex justify-center mt-10">
        <Image
          src="/logo.avif"
          className="w-[120px]"
          width={150}
          height={40}
          alt="logo"
        />
      </div>

      <div className="flex flex-col gap-2 text-center mx-auto lg:mt-16 mt-10 mb-20">
        <Badge
          variant="secondary"
          className="text-sm duration-300 transition-all ease-in-out hover:opacity-75 w-fit bg-yellow-50 hover:bg-yellow-50/70 mx-auto font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400"
        >
          <Link href="/#pillows" className=" flex items-center gap-2">
            🎉 Kayakeva Special Offer. Shop Now! <Icons.right />
          </Link>
        </Badge>
        <h1 className="text-3xl mb-4 mt-1  mx-auto font-bold tracking-tighter sm:text-5xl md:tracking-tight">
          More You Buy, More You Save! FREE 500 Gift on 6+
        </h1>
        <p className="max-w-[600px] mb-1 mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Limited Time Offer: Buy 6+ Items, Get a 500 Gift!
        </p>
        <div className="gap-3 flex flex-row mx-auto">
          <Button className="w-fit">
            <Link href="/#pillows">Shop Now!</Link>
          </Button>
          <Button className="w-fit" variant="outline">
            <Link href="/#pillows">Craete Account</Link>
          </Button>
        </div>
      </div>

      <Tabs id="pillows" defaultValue="Squares" className="">
        <TabsList className="flex gap-4 md:gap-8 w-fit mx-auto ">
          <TabsTrigger value="Squares">Square Pillows</TabsTrigger>
          <TabsTrigger value="Rectangles">Rectangle Pillows</TabsTrigger>
          <TabsTrigger value="squarec">S & Q Pillows</TabsTrigger>
        </TabsList>
        <TabsContent value="Squares">
          <SquarePillows />
        </TabsContent>
        <TabsContent value="Rectangles">
          <RectanglePillows />
        </TabsContent>
        <TabsContent value="squarec">
          <SquarecPillows />
        </TabsContent>
      </Tabs>
    </main>
  );
}
