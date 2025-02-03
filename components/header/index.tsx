"use client";
import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/utils";
import { useState} from "react";

type HeaderProps = {
    tabIndex?: number;
}

export default function Header({tabIndex}: HeaderProps) {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="w-full">
            <div className="relative flex items-start justify-between w-full px-2 py-2 md:p-0 z-[2]">
                <div>
                    <Link href="/">
                        <Image
                            alt="logo"
                            loading="lazy"
                            width="216"
                            height="216"
                            decoding="async"
                            data-nimg="1"
                            className="cursor-pointer w-[120px] md:w-[195px]"
                            src="/images/logo.png"
                        />
                    </Link>
                </div>
                <div className="flex items-center md:mr-10 flex-1 w-full">
                    <div
                        className="hidden lg:flex items-center md:gap-5 lg:gap-8 xl:gap-14 text-2xl flex-1 justify-center">
                        <div className={cn("relative group cursor-pointer", tabIndex == 0 ? "font-bold" : "")}>
                            <Link className="text-black font-primary" href="/">Staking</Link>
                            <div
                                className={cn("border-b-2 border-black absolute group-hover:w-full transition-all duration-500 left-[50%] -translate-x-[50%] -bottom-[5px]", tabIndex == 0 ? "w-full" : "w-0")}></div>
                        </div>
                        <div className={cn("relative group cursor-pointer", tabIndex == 1 ? "font-bold" : "")}>
                            <Link className="text-black font-primary" href="/game">Spin Game</Link>
                            <div
                                className={cn("border-b-2 border-black absolute group-hover:w-full transition-all duration-500 left-[50%] -translate-x-[50%] -bottom-[5px]", tabIndex == 1 ? "w-full" : "w-0")}></div>
                        </div>
                        <div className={cn("relative group cursor-pointer", tabIndex == 2 ? "font-bold" : "")}>
                            <Link className="text-black font-primary" href="/referral">Referral</Link>
                            <div
                                className={cn("border-b-2 border-black absolute group-hover:w-full transition-all duration-500 left-[50%] -translate-x-[50%] -bottom-[5px]", tabIndex == 2 ? "w-full" : "w-0")}></div>
                        </div>
                    </div>
                    <div
                        className="flex md:items-center items-end justify-end w-full lg:w-fit md:flex-row flex-col-reverse">
                        <div className="flex items-center">
                            <Link target="_blank" href="https://x.com/DeafBeraClub">
                                <Image
                                    alt="X Logo"
                                    loading="lazy"
                                    width="109"
                                    height="109"
                                    decoding="async"
                                    data-nimg="1"
                                    className="cursor-pointer w-[80px] md:w-[110px]"
                                    src="/images/dis(1).png"/>
                            </Link>
                            <Link target="_blank" href="https://discord.gg/jqmzX5Btkv">
                                <Image
                                    alt="Discord Logo"
                                    loading="lazy"
                                    width="109"
                                    height="109"
                                    decoding="async"
                                    data-nimg="1"
                                    className="cursor-pointer w-[80px] md:w-[110px]"
                                    src="/images/dis(2).png"/>
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                className="bg-black text-white rounded-2xl text-base px-10 py-2 md:px-14 md:py-4 font-primary">Connect Wallet
                            </button>
                            <button className="bg-black text-white p-2 md:p-3 rounded-[15px] lg:hidden" onClick={() => setShowMenu(!showMenu)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6 md:h-9 md:w-9">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d={showMenu ? "M6 18 18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cn(
                "absolute h-svh bg-primary top-0 left-0 w-full lg:hidden pt-[140px] md:pt-[190px]", showMenu ? "z-[1]" : "z-[0]"
            )}>
                <div className="flex flex-col gap-5 items-center text-2xl">
                    <Link className="text-black font-primary" href="/">Staking</Link>
                    <Link className="text-black font-primary" href="/game">Spin Game</Link>
                    <Link className="text-black font-primary" href="/referral">Referral</Link>
                </div>
            </div>
        </div>
    )
}