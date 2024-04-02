import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { PillowCombos } from "./combos";
import BlurImage from "./blur-image";

export function SqPillow({ images }) {
  return (
    <Tabs id="pillows" defaultValue="Squares" className="px-2">
      <TabsList className="flex  md:gap-8 w-fit mx-auto ">
        <TabsTrigger value="Squares">Pillow Combos</TabsTrigger>
        <TabsTrigger value="Rectangles">Color Splash</TabsTrigger>
      </TabsList>
      <TabsContent value="Squares" className="">
        <h1 className=" lg:text-3xl sm:text-xl text-2xl text-white mx-auto lg:mb-10 my-5">
          Pillow Combos
        </h1>
        <PillowCombos />
      </TabsContent>
      <TabsContent value="Rectangles">
        <h1 className=" lg:text-3xl sm:text-xl text-2xl text-white mx-auto lg:mb-10 my-5">
          Color Splash
        </h1>
        <div className="">
          <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-5">
            {images.resources.map((image) => (
              <div key={image.asset_id}>
                <BlurImage image={image} />
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
