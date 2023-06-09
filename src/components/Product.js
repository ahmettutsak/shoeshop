import Image from "next/image";
export default function Product({ img, name, price }) {
  return (
    <div className="border-2 p-4 flex flex-col gap-2 max-w-[240px]">
      <Image
        className="p-1 rounded"
        width={200}
        height={200}
        src={img}
        alt={name}
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <p className="font-bold text-lg">${price}</p>
    </div>
  );
}
