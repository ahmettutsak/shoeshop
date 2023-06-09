import Product from "@/components/Product";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div>
      <main className="flex justify-evenly mt-12">
        <div className="flex flex-col items-start mt-24 gap-2">
          <h1 className="text-5xl font-bold tracking-wide">Basit açıklama</h1>
          <p className="text-xl text-gray-400 tracking-wider">uzun açıklama</p>
          <button className="mt-12">See Products</button>
        </div>
        <Slider />
      </main>
      <div className="flex p-8 gap-2 mt-48">
        <Product
          img={"https://picsum.photos/200"}
          name={"Deneme"}
          price={"50"}
        />
        <Product
          img={"https://picsum.photos/200"}
          name={"Deneme"}
          price={"30"}
        />
        <Product
          img={"https://picsum.photos/200"}
          name={"Deneme"}
          price={"70"}
        />
      </div>
    </div>
  );
}
