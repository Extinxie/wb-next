import Link from "next/link";
import { TopMenuBuild } from "./top-menu.data";
import cn from "clsx"
import SwitchLanguage from "../../switch/switchLanguage";
import { Dot } from "lucide-react";


export default function TopMenu() {

    return (
        <div className="flex gap-8 items-center">
            <nav className="flex gap-5 items-center mt-6 mx-5">{TopMenuBuild.map((item, index) => (
                <Link className={cn("flex items-center gap-1 font-medium transition-opacity hover:opacity-80 opacity-60 duration-200", index === 0 && 'text-teal-600')} key={item.title} href={item.href}>
                    {item.icon && (<item.icon size={16} />)}
                    <span>{item.title}</span>
                </Link>))
            }</nav >

            <div className="font-medium flex items-center gap-1 mt-6"> <span className="opacity-50">Ставрополь</span> <Dot /> <button className="text-blue-600"><Link href='/'>Укажите адресс </Link></button> <div> <SwitchLanguage /> </div></div>

        </div>
    );
}



