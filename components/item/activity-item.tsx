import Image from "next/image";


type Activity = {
    title: string,
    time: string,
}

export default function ActivityItem({title, time}: Activity) {
    return (
        <div className="text-white flex justify-between items-center gap-10">
            <div className="flex items-center gap-2">
                <div className="flex-shrink-0">
                    <Image alt="logo" loading="lazy" width="66" height="65" decoding="async" data-nimg="1" src="/images/5.png"/>
                </div>
                <div>{title}</div>
            </div>
            <div className="flex-shrink-0">{time}</div>
        </div>
    );
}