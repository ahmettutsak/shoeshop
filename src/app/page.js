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
    </div>
  );
}
