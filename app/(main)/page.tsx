import Image from "next/image";
import Header from "@/components/header";
import ScoreItem from "@/components/item/score-item";
import ActivityItem from "@/components/item/activity-item";


export default function Home() {


  const activityList = [
    {
      title: "0xB6...96C4 has staked 5 Deaf Bera NFTs",
      time: "21m ago"
    },
    {
      title: "0xB6...96C4 has staked 5 Deaf Bera NFTs",
      time: "21m ago"
    },
    {
      title: "0xB6...96C4 has staked 5 Deaf Bera NFTs",
      time: "21m ago"
    },
    {
      title: "0xB6...96C4 has staked 5 Deaf Bera NFTs",
      time: "21m ago"
    },
    {
      title: "0xB6...96C4 has staked 5 Deaf Bera NFTs",
      time: "21m ago"
    },
    {
      title: "0xB6...96C4 has staked 5 Deaf Bera NFTs",
      time: "21m ago"
    }
  ]

  return (
    <div className="min-h-svh bg-primary pb-10">
      <Header
          tabIndex={0}
      />
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="bg-black px-2 py-4 rounded-3xl max-w-[550px] mx-auto relative">
          <div className="bg-primary rounded-xl flex flex-col gap-5 px-3 py-10">
            <p className="text-2xl text-center font-primary">DBC NFTs STAKING</p>
            <div className="grid md:grid-cols-3 gap-8 grid-cols-2">
              <ScoreItem name={"Staked"} value={"344"} showClass={""}/>
              <ScoreItem name={"Unstaked"} value={"1,878"} showClass={""}/>
              <ScoreItem name={"Total"} value={"2,222"} showClass={""}/>
              <ScoreItem name={"Your points"} value={"30,744"} showClass={"block md:hidden"}/>
            </div>
            <div className="flex gap-5">
              <div>
                <div className="text-2xl">Staked: 0</div>
                <div>You have nothing staked yet. Stake your Deaf Bera NFTs to earn points, free spin and get ready for
                  surprises.
                </div>
              </div>
              <div>
                <ScoreItem name={"Your points"} value={"30,744"} showClass={"hidden md:block"} isBig={true}/>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <ScoreItem name={"Free Spin"} value={"15"} showClass={"md:w-[200px]"}/>
              </div>
              <div className="">
                <Image
                    alt="card"
                    loading="lazy"
                    width="147"
                    height="149"
                    decoding="async"
                    data-nimg="1"
                    className="mr-5 ml-auto"
                    src="/images/cards.png"/>
              </div>
            </div>
            <div className="flex justify-center gap-5">
              <button className="bg-black px-14 py-3 md:px-20 md:py-6 text-white rounded-2xl text-xl w-auto">Stake
              </button>
              <button className="bg-black px-14 py-3 md:px-20 md:py-6 text-white rounded-2xl text-xl w-auto">Unstake
              </button>
            </div>
          </div>
          <Image alt="token" loading="lazy" width="280" height="269" decoding="async" data-nimg="1"
               className="absolute left-0 top-0 -translate-x-[50%] -translate-y-[30%] w-[150px]"
               src="/images/token.png" />
        </div>
        <div className="max-w-[550px] mx-auto">
          <Image alt="group image" loading="lazy" width="553" height="407" decoding="async" data-nimg="1"
               className="relative z-2 left-0 -mt-14 mb-10"
               src="/images/stakegroup.png"/>
        </div>
        <div className="relative">
          <div className="absolute left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-inner shadow-black uppercase text-2xl bg-primary border-1 border-black w-fit rounded-xl px-8 py-2">Activity</div>
          <div className="bg-black px-3 md:px-8 pt-16 pb-10 rounded-[20px] flex flex-col gap-5">
            {
              activityList.map((activity, key) => {
                return (
                   <div key={key}>
                     <ActivityItem
                         title={activity.title}
                         time={activity.time}
                     />
                   </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
