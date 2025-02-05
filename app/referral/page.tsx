"use client";
import Image from "next/image";
import Header from "@/components/header";
import ScoreItem from "@/components/item/score-item";
import Button from "@/components/global/button";

export default function Home() {
  const activityList = [
    {
      rank: 1,
      user: "0xB6...96C4",
      numberOfRefer: "402",
      points: "90,467",
    },
    {
      rank: 2,
      user: "0xB6...96C4",
      numberOfRefer: "402",
      points: "90,467",
    },
    {
      rank: 3,
      user: "0xB6...96C4",
      numberOfRefer: "402",
      points: "90,467",
    },
    {
      rank: 4,
      user: "0xB6...96C4",
      numberOfRefer: "402",
      points: "90,467",
    },
    {
      rank: 5,
      user: "0xB6...96C4",
      numberOfRefer: "402",
      points: "90,467",
    },
    {
      rank: 6,
      user: "0xB6...96C4",
      numberOfRefer: "402",
      points: "90,467",
    },
    {
      rank: 7,
      user: "0xB6...96C4",
      numberOfRefer: "402",
      points: "90,467",
    },
    {
      rank: 8,
      user: "0xB6...96C4",
      numberOfRefer: "402",
      points: "90,467",
    },
    {
      rank: 9,
      user: "0xB6...96C4",
      numberOfRefer: "402",
      points: "90,467",
    },
    {
      rank: 10,
      user: "0xB6...96C4",
      numberOfRefer: "402",
      points: "90,467",
    },
  ];

  const onStaked = () => {};

  const onUnStaked = () => {};

  return (
    <div className="min-h-svh bg-primary pb-10">
      <Header tabIndex={2} />
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="bg-black px-2 py-4 rounded-3xl max-w-[550px] mx-auto relative">
          <div className="bg-primary rounded-xl flex flex-col gap-5 px-5 py-10">
            <p className="text-2xl text-center font-primary">
              INVITE YOUR FRIENDS
            </p>
            <div className="grid md:grid-cols-3 gap-5 grid-cols-2">
              <ScoreItem
                name={"Yout Rank"}
                value={"89"}
                showClass={"block md:hidden"}
              />
              <ScoreItem name={"Yout invite"} value={"0"} showClass={""} />
              <ScoreItem name={"Free Spin"} value={"15"} showClass={""} />
              <ScoreItem name={"Your Points"} value={"30,489"} showClass={""} />
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <div className="text-2xl font-primary">Your Referral Link</div>
                <div className="bg-black rounded-2xl text-white p-5 text-sm font-primary">
                  https://www.deafbear.xyz/invite?ref=g829m76qjwbjhxfyfg9q
                </div>
              </div>
              <div className="text-sm font-primary">
                Invite your friends to join and earn 1 free spin and 100 points
                for each successful invite!
              </div>
            </div>
            <div className="flex justify-center gap-5">
              <Button title={"Copy Code"} click={onStaked} />
              <Button title={"Share on X"} click={onUnStaked} />
            </div>
          </div>
          <ScoreItem
            name={"89"}
            value={"Your Rank"}
            showClass={"absolute w-[150px] -top-20 right-5 hidden md:block"}
          />
          <Image
            alt="token"
            loading="lazy"
            width="280"
            height="269"
            decoding="async"
            data-nimg="1"
            className="absolute left-0 top-0 -translate-x-[50%] -translate-y-[30%] w-[150px]"
            src="/images/coin_big.png"
          />
        </div>
        <div className="max-w-[550px] mx-auto">
          <Image
            alt="group image"
            loading="lazy"
            width="553"
            height="407"
            decoding="async"
            data-nimg="1"
            className="relative z-2 left-0 -mt-14 mb-10"
            src="/images/stakegroup.png"
          />
        </div>
        <div className="relative pt-8">
          <div className="font-primary absolute left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-inner shadow-black uppercase text-2xl bg-primary border-1 border-black w-fit rounded-xl px-10 py-2">
            LEADERBOARD
          </div>
          <div className="bg-black px-3 md:px-8 pt-16 pb-10 rounded-[20px] flex flex-col gap-5">
            <table>
              <thead>
                <tr className="uppercase">
                  <th className="text-left text-white font-primary">Rank</th>
                  <th className="text-left text-white font-primary">User</th>
                  <th className="text-left text-white font-primary">
                    NO. of referrals
                  </th>
                  <th className="text-right text-white font-primary">
                    points earned
                  </th>
                </tr>
              </thead>
              <tbody>
                {activityList.map((activity, key) => {
                  return (
                    <tr key={key}>
                      <td className="text-left text-white font-primary">
                        {activity.rank}
                      </td>
                      <td className="text-left text-white font-primary">
                        {activity.user}
                      </td>
                      <td className="text-left text-white font-primary">
                        {activity.numberOfRefer}
                      </td>
                      <td className="text-right text-white font-primary">
                        {activity.points}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
