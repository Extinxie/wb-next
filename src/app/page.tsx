
import Image from "next/image";
import Header from "../components/layout/header/header";
import TopMenu from "../components/layout/top-menu/top-menu";
import Slider from "../components/pages/home/slider/slider";
import AnimeRealeses from "../search";

export default function Home() {

  return (
    <div className="container mx-auto bg-neutral-950 rounded-lg">
      <Header />
      <TopMenu />
      <Image src='/unti.png' alt='123' width={1407} height={94} className="mx-auto rounded-lg mt-4" />
      <Slider />
      <AnimeRealeses />
    </div>
  );
}
