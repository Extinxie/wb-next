'use client'
import { LayoutGrid, Search } from "lucide-react";
import Image from "next/image";
import { headerMenu } from "./header-menu";
import Link from "next/link";
import cn from "clsx";
import { useTranslations } from "next-intl";


export default function Header() {
    const t = useTranslations('header')


    return (
        <header className="grid grid-cols-[2fr_7fr_2.3fr] items-center gap-5 mt-3">
            <div className="flex items-center gap-7">
                <Image src='/ozon.png' width={120} height={40} alt="ozon" />

                <button className="bg-primary p-2 rounded-lg text-white flex gap-2 items-center px-3"><LayoutGrid />
                    <span>{t('catalog')}</span></button>
            </div>


            <div className="flex bg-primary items-center justify-center rounded-xl border border-primary"> <input
                type="text"
                value=''
                onChange={() => { }}
                placeholder="Искать на Ozon"
                className="bg-white py-1.5 px-5 rounded-xl w-full"
            />
                <button className="bg-primary rounded-xl px-3 py-1.5 text-white">
                    <Search />
                </button>
            </div>


            <div className="flex items-center gap-5 ml-2 justify-end">
                {headerMenu.map((item, index) => <Link
                    className={cn('flex flex-col items-center transition-opacity opacity-50 hover:opacity-100 duration-200',
                        index === 0 && 'opacity-100'
                    )}
                    key={item.title} href={item.href}>
                    <item.icon size={20} />
                    <span className="text-sm font-medium">{item.title}</span>
                </Link>)}
            </div>


        </header>
    );
}