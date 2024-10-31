import Card from '@/components/Card';
import { EquipmentGallery } from '@/components/EquipmentSlide';
import { CarouselPlugin } from '@/components/GallerySlider';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="w-full h-[80vh] bg-[#0B2B61] relative flex ">
        <div className="z-10 md:pl-20 pt-40">
          <h1 className="font-bold text-6xl lg:[30%] xl:w-[55%] text-white">
            <span className="text-[#BADA55]">Global Aspirations, </span>
            Local Inspirations
          </h1>
        </div>
        <div className="absolute bg-gradient-to-b from-indigo-400/50 to-purple-600/80 w-96 h-96 blur-[200px] z-0 right-24"></div>
        <div className="absolute bg-gradient-to-b from-cyan-400/50 to-blue-600/80 w-96 h-96 blur-[200px] z-0 bottom-2"></div>
      </section>

      {/* What We Do Section */}
      <section className="lg:relative -top-56 flex flex-col items-center">
        <h2 className="font-medium text-5xl text-[#BADA55] py-5 md:py-0">
          What We Do
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 pt-5">
          <Card />
          <Card />
        </div>
      </section>

      {/* News Section */}
      <section className="lg:relative -top-28 flex flex-col items-center py-5 md:py-0">
        <h2 className="font-semibold text-5xl text-[#3A8088]">News</h2>
        <CarouselPlugin />
      </section>

      {/* Where We Operate Section */}
      <section className="md:relative py-20 flex flex-col bg-gray-100">
        <div className="  w-11/12 mx-auto ">
          <div className="mb-10 w-full md:w-1/2 xl:w-1/4 md:ml-52">
            <h3 className="font-semibold text-3xl">Where We Operate</h3>
            <p className="text-xl">Local Experience...</p>
            <p className="text-end"> Global Expertise</p>
          </div>
          <div className="relative flex justify-center items-center h-[600px]">
            <Image
              src="/images/map/Iraq.webp"
              width={200}
              height={250}
              alt="Iraq map"
              className="absolute top-0 left-0 md:top-24 md:-left-10"
            />
            <Image
              src="/images/map/Oman.webp"
              width={300}
              height={400}
              alt="Oman map"
              className="absolute top-48 md:left[20%] lg:left-[50%]"
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="w-full h-screen bg-[#0B2B61] relative md:flex items-center justify-center flex-col">
        <h2 className="font-medium text-5xl text-center md:text-start p-5 text-[#BADA55]">
          Innovation
        </h2>
        <div className="md:w-11/12 mx-auto">
          <div className="absolute bg-gradient-to-b from-indigo-400/50 to-purple-600/80 w-96 h-96 blur-[200px] z-0 md:right-52"></div>
          <div className="absolute bg-gradient-to-b from-cyan-400/50 to-blue-600/80 w-96 h-96 blur-[200px] z-0 md:bottom-2"></div>
          <div className="mx-auto">
            <EquipmentGallery />
          </div>
        </div>
      </section>

      {/* About us */}
      <section className="w-full p-8">
        <div className="w-11/12 mx-auto m-5">
          <h2 className="font-medium w-[30%] text-5xl p-5 ml-28 text-[#0B2B61]">
            Innovation
          </h2>
          <div className="flex flex-col  mx-auto gap-5 w-[60%]">
            <h3 className="font-medium text-3xl p-5 text-[#BADA55]">
              Led by the belief that anyone can grow
            </h3>
            <div>
              <p className="text-lg">
                Falcon has been operating in Oman for over 7 years having being
                founded in 2016. Falcon inherited it’s drive, culture, values
                and ambitions and is deeply rooted to Falcon Oilfield Services.
                During this period, Falcon has grown to become one of the most
                successful technology companies in Oman and is often cited as a
                leading example of the new wave of oilfield entrepreneurship in
                the country and beyond.
              </p>
            </div>
            <p className="text-lg">
              Furthermore, Falcon maintains a high in-country value (ICV), high
              service standard, innovative technologies, carried out with young
              state of the art equipment, Falcon differentiates itself from its
              competitors in value for money. Our professional, experienced team
              of operators and engineers achieve a world-class service at a very
              high safety standard.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
