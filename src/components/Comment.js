import Image from "next/image";

export default function Comment({ name, comment }) {
  return (
    <div className="flex flex-col items-center gap-3 border-2 p-12">
      <Image
        className="rounded-full"
        src={"https://picsum.photos/150"}
        alt="userpic"
        width={150}
        height={150}
      />
      <h2>{name}</h2>
      <p>{comment}</p>
    </div>
  );
}
