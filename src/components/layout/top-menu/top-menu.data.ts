import { PagesConfig } from "@/src/config/pages.cfg";
import { Banana, BriefcaseBusiness, CreditCard, Heart, LucideIcon, Package, Plane, ShoppingBasket } from "lucide-react";

export interface ITopMenu {
    title: string,
    icon?: LucideIcon
    href: string
}



export const TopMenuBuild: ITopMenu[] = [
    {
        title: 'Ozon fresh',
        icon: Banana,
        href: PagesConfig.FRESH
    },
    {
        title: 'Ozon Карта',
        icon: CreditCard,
        href: PagesConfig.OZON_CARD
    },
    {
        title: 'Авиа-билеты',
        icon: Plane,
        href: PagesConfig.AIR_TICKETS
    },
    {
        title: 'Для бизнеса',
        icon: BriefcaseBusiness,
        href: PagesConfig.FOR_BUSINESS
    },
    {
        title: 'Одежда',
        href: PagesConfig.CLOTHING
    },
    {
        title: 'Электроника',
        href: PagesConfig.ELECTRONICS
    },
    {
        title: 'Дом и сад',
        href: PagesConfig.HOME_AND_GARDEN
    },
    {
        title: 'Товары за 1₽',
        href: PagesConfig.PRODUTS_FOR_1RUB
    },
    {
        title: 'Сертификаты',
        href: PagesConfig.CERTIFICATIONS
    },
] as const