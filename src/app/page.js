import Product from "@/components/Product";
import Slider from "@/components/Slider";
import Image from "next/image";
import comments from "@/json/comments.json";
import Comment from "@/components/Comment";

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
      {/*fotoğraf ve firma açıklaması*/}
      <div className="flex justify-center gap-4 p-24 mt-24">
        <div className="max-w-[400px] mr-36">
          <Image
            src={"https://picsum.photos/400"}
            alt="resim"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold tracking-wide">Firma açıklaması</h2>
          <p className="text-xl text-gray-400 tracking-wider">
            ürünler hakkında kısa bilgi
          </p>
        </div>
      </div>
      {/* insanların yorumları*/}
      <div className="flex p-24 gap-8 justify-center">
        {comments.map((com, index) => (
          <Comment key={index} name={com.username} comment={com.comment} />
        ))}
      </div>
    </div>
  );
}
