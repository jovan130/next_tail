import {cn} from "@/lib/utils";

type Score = {
    name: string,
    value: string,
    isBig?: boolean,
    showClass: string
}

export default function ScoreItem({ name, value, isBig, showClass }: Score) {
    return (
        <div className={cn("bg-black border-black rounded-2xl min-w-0 flex-shrink-0", isBig ? "w-[200px]" : "", showClass)}>
            <div
                className="bg-primary text-center py-5 rounded-2xl border-1 border-black drop-shadow-md shadow-black shadow-lg text-lg">{name}
            </div>
            <p className="text-white py-2 text-center">{value}</p>
        </div>
    )
}