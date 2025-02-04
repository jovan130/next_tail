import Image from "next/image";

type GameScore = {
  name: string;
  value: string;
  image: string;
};

export default function GameScoreItem({ name, value, image }: GameScore) {
  return (
    <div className="bg-black border-black rounded-2xl min-w-0 flex-shrink-0 p-2">
      <div className="bg-primary text-center flex items-center justify-center rounded-2xl border border-black text-lg -translate-y-4 h-[120px]">
        {
          image == "" ? (
            <p className="text-black text-center font-primary">{value}</p>
          ) : (
            <Image
              alt="bera"
              loading="lazy"
              width="70"
              height="70"
              decoding="async"
              data-nimg="1"
              src={image}
            />
          )
        }
      </div>
      <p className="text-white pb-3 text-center font-primary">{name}</p>
    </div>
  );
}
