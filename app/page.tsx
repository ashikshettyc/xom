import Card from "@/components/Card";
import { CarouselPlugin } from "@/components/GallerySlider";
import Image from "next/image";
export default function Home() {
  return (
    <div className="">
      <div className="w-screen h-screen bg-[#0B2B61] ">
        <h1 className="font-bold text-6xl w-[60%] pt-28 pl-20 text-white">
          <span className="text-[#BADA55]">Global Aspirations,</span>
          <br />
          Local Inspirations
        </h1>
      </div>
      <div className="relative -top-56 flex flex-col justify-center items-center">
        <h2 className="font-semibold text-5xl text-[#BADA55]">What we Do</h2>
        <div className="flex gap-10 pt-5">
          <Card />
          <Card />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col relative -top-28 h-500px">
        <h2 className="font-semibold text-5xl text-[#3A8088]">News</h2>
        <CarouselPlugin />
      </div>
      <div className="relative">
        <div className="ml-[30%] w-96 ">
          <h3 className="font-semibold text-3xl">Where We Operate</h3>
          <p className="text-xl">Local Experience...</p>
          <p className="text-xl text-end">Global Expertise</p>
        </div>
        <div className="flex justify-center items-center">
          <div className=" absolute top-0 right-52">
            <Image
              src="/images/map/Iraq.webp"
              width={200}
              height={250}
              alt="Iraq logo"
            />
          </div>
          <div className="absolute top-50">
            <Image
              src="/images/map/Oman.webp"
              width={300}
              height={400}
              alt="Oman logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
