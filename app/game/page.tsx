"use client";
import Image from "next/image";
import Header from "@/components/header";
import Button from "@/components/global/button";
import GameScoreItem from "@/components/item/game-score-item";
import ScoreItem from "@/components/item/score-item";
import ActivityItem from "@/components/item/activity-item";

export default function Home() {
  const activityList = [
    {
      title: "0xB6...96C4 has staked 5 Deaf Bera NFTs",
      time: "21m ago",
    },
    {
      title: "0xB6...96C4 has staked 5 Deaf Bera NFTs",
      time: "21m ago",
    },
    {
      title: "0xB6...96C4 has staked 5 Deaf Bera NFTs",
      time: "21m ago",
    },
    {
      title: "0xB6...96C4 has staked 5 Deaf Bera NFTs",
      time: "21m ago",
    },
    {
      title: "0xB6...96C4 has staked 5 Deaf Bera NFTs",
      time: "21m ago",
    },
    {
      title: "0xB6...96C4 has staked 5 Deaf Bera NFTs",
      time: "21m ago",
    },
  ];

  const gameScoreList = [
    {
      name: "10 BERA",
      value: "",
      image: "/images/6.png",
    },
    {
      name: "TRY AGAIN",
      value: "TRY AGAIN!",
      image: "",
    },
    {
      name: "500 $DEAF",
      value: "",
      image: "/images/7.png",
    },
    {
      name: "TRY AGAIN",
      value: "TRY AGAIN!",
      image: "",
    },
    {
      name: "10 BERA",
      value: "",
      image: "/images/7.png",
    },
    {
      name: "500 $DEAF",
      value: "",
      image: "/images/6.png",
    },
  ];

  const onSpin = () => {};

  return (
    <div className="min-h-svh bg-primary pb-10">
      <Header tabIndex={1} />
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="md:text-center text-3xl mt-5 md:mt-0 max-w-[550px] mx-auto font-primary">
          SPIN &amp; WIN
        </div>
        <div className="bg-black px-2 py-4 rounded-3xl max-w-[550px] mx-auto relative mt-5">
          <div className="bg-primary rounded-xl flex flex-col gap-5 px-3 md:px-5 py-10 pb-28">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {gameScoreList.map((gameScore, key) => {
                return (
                  <div key={key}>
                    <GameScoreItem
                      name={gameScore.name}
                      value={gameScore.value}
                      image={gameScore.image}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center gap-5 mt-7">
              <Button title={"Spin"} click={onSpin} />
            </div>
            <div className="px-5 font-primary">
              Buy and stake Deaf Bera NFT and get 3 free spins daily.{" "}
              <a className="underline text-sm font-primary" href="/terms">
                Terms and Conditions
              </a>{" "}
              apply.
            </div>
          </div>
          <ScoreItem
            name={"15"}
            value={"Free Spin"}
            showClass={"absolute w-[150px] -top-20 right-5"}
          />
          <Image
            alt="token"
            loading="lazy"
            width="280"
            height="269"
            decoding="async"
            data-nimg="1"
            className="absolute bottom-0 left-[0%] -translate-x-[-50%] -translate-y-[-50%]"
            src="/images/coin_big.png"
          />
        </div>
        <div className="relative mt-44">
          <div className="absolute left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-inner shadow-black uppercase text-2xl bg-primary border-1 border-black w-fit rounded-xl px-8 py-2">
            Activity
          </div>
          <div className="bg-black px-3 md:px-8 pt-16 pb-10 rounded-[20px] flex flex-col gap-5">
            {activityList.map((activity, key) => {
              return (
                <div key={key}>
                  <ActivityItem title={activity.title} time={activity.time} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
