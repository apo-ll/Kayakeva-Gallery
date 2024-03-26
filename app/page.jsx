import RectanglePillows from "@/components/rectangles";
import SquarecPillows from "@/components/squarec";
import { SquarePillows } from "@/components/squres";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";

import { Header } from "@/components/header";

export default async function Home() {
  return (
    <main>
      <div className="flex justify-center container mx-auto lg:mt-16 mt-10 mb-12 px-3 ">
        <Header />
      </div>

      <Tabs id="pillows" defaultValue="Squares" className="px-2">
        <TabsList className="flex  md:gap-8 w-fit mx-auto ">
          <TabsTrigger value="Squares">Square Pillows</TabsTrigger>
          <TabsTrigger value="Rectangles">Rectangle Pillows</TabsTrigger>
          <TabsTrigger value="squarec">Pillow Combos</TabsTrigger>
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
