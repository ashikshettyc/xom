import ServiceCards from '@/components/Card';
import { EquipmentGallery } from '@/components/EquipmentSlide';
import { CarouselPlugin } from '@/components/GallerySlider';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        id="home"
        className="w-full h-[40vh] md:h-[80vh] bg-[#0B2B61] flex relative"
      >
        <div className="z-10 pl-10 md:pl-20 md:pt-40 pt-20 w-full">
          <h1 className="font-bold text-4xl md:text-6xl lg:w-[55%] text-white">
            <span className="text-[#BADA55]">Global Aspirations, </span>
            Local Inspirations
          </h1>
        </div>
        <div className="absolute bg-gradient-to-b from-cyan-400/50 to-blue-600/80 w-40 h-40 lg:w-96 lg:h-96 blur-[200px] z-0 bottom-2"></div>
        <div className="hidden md:flex absolute bg-gradient-to-b from-indigo-400/50 to-purple-600/80 w-96 h-96 blur-[200px] z-0 right-24"></div>
      </section>

      {/* What We Do Section */}
      <section
        id="what-we-do"
        className="lg:relative -top-56 flex flex-col items-center my-10 lg:my-0 "
      >
        <h2 className="font-medium text-5xl text-[#BADA55] py-5 md:py-0">
          What We Do
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 pt-5 w-full max-w-6xl mx-auto justify-center items-center">
          <ServiceCards />
        </div>
      </section>

      {/* News Section */}
      <section className="lg:relative -top-28 flex flex-col items-center py-5 my-10 lg:my-0 md:py-0">
        <h2 className="font-semibold text-5xl text-[#3A8088]">News</h2>
        <CarouselPlugin />
      </section>

      {/* Where We Operate Section */}
      <section
        id="where-we-operate"
        className="md:relative py-20 flex flex-col bg-gray-100"
      >
        <div className="w-11/12 mx-auto">
          <div className="mb-10 w-full md:w-1/2 xl:w-1/4 md:ml-52">
            <h3 className="font-semibold text-3xl">Where We Operate</h3>
            <p className="text-xl">Local Experience...</p>
            <p className="text-end"> Global Expertise</p>
          </div>
          <div className="relative flex mb-52 md:mb-0 justify-center items-center h-[400px] md:h-[600px]">
            <div>
              <Image
                src="/images/map/Iraq.webp"
                width={200}
                height={250}
                alt="Iraq map"
                className="absolute top-0 left-0 md:top-24 md:left-[40%]"
              />
              <h3 className="absolute top-0 left-0 md:top-24 md:left-[40%] font-bold text-3xl pl-16 pt-20">
                Iraq
              </h3>
            </div>
            <div>
              <Image
                src="/images/map/Iraq.webp"
                width={200}
                height={250}
                alt="Iraq map"
                className="absolute top-0 left-0 md:top-24 md:left-[40%]"
              />
              <h3 className="absolute top-0 left-0 md:top-24 md:left-[40%] font-bold text-3xl pl-16 pt-20">
                Iraq
              </h3>
            </div>
            <div>
              <Image
                src="/images/map/Oman.webp"
                width={300}
                height={400}
                alt="Oman map"
                className="absolute top-48 left-[10%] md:left-[50%]"
              />
              <h3 className="absolute top-48 md:left-[50%] font-bold text-3xl md:pl-40 pt-40">
                Oman
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section
        id="innovation"
        className="w-full lg:h-screen bg-[#0B2B61] relative md:flex items-center justify-center flex-col py-5"
      >
        <h2 className="font-medium text-5xl text-center md:text-start p-5 text-[#BADA55]">
          Innovation
        </h2>
        <div className="lg:w-11/12 mx-auto relative">
          <div className="hidden lg:flex absolute bg-gradient-to-b from-indigo-400/50 to-purple-600/80 w-96 h-96 blur-[200px] z-0 md:right-52"></div>
          <div className="hidden lg:flex absolute bg-gradient-to-b from-cyan-400/50 to-blue-600/80 w-96 h-96 blur-[200px] z-0 md:bottom-2"></div>
          <div className="mx-auto">
            <EquipmentGallery />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-full p-8">
        <div className="w-11/12 mx-auto m-5">
          <h2 className="font-medium w-full md:w-[30%] text-5xl p-5 ml-0 md:ml-28 text-[#0B2B61]">
            About Falcon
          </h2>
          <div className="flex flex-col mx-auto gap-5 w-full md:w-[60%]">
            <h3 className="font-medium text-3xl p-5 text-[#BADA55]">
              Led by the belief that anyone can grow
            </h3>
            <p className="text-lg">
              Falcon has been operating in Oman for over 7 years, having been
              founded in 2016. Falcon inherited its drive, culture, values, and
              ambitions and is deeply rooted in Falcon Oilfield Services...
            </p>
            <p className="text-lg">
              Furthermore, Falcon maintains a high in-country value (ICV), high
              service standard, and innovative technologies...
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 text-black py-10">
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-start md:items-center space-y-6 md:space-y-0 px-6">
          {/* Left Side: Contact Information */}
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <p className="mb-2">
                <strong>Tel:</strong>{' '}
                <a href="tel:+96822321114" className="hover:underline">
                  (+968) 22321114
                </a>
              </p>
              <p className="mb-2">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:info@falconinvs.com"
                  className="hover:underline"
                >
                  info@falconinvs.com
                </a>
              </p>
              <p className="mb-2">
                <strong>LinkedIn:</strong>{' '}
                <a href="#" className="hover:underline">
                  Company LinkedIn
                </a>
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <h4 className="font-semibold">Physical Address</h4>
              <p>18 November Street, Way Number: 246</p>
              <p>Block: 270, Building 486</p>
              <p>Muscat, Oman</p>
              <h4 className="font-semibold mt-4">Mailing Address</h4>
              <p>PO Box 750 Mina Al Fahal</p>
              <p>PC 116, Muscat, Oman</p>
            </div>
          </div>

          {/* Right Side: Google Map */}
          <div className="md:w-1/2 h-64 w-full rounded-lg overflow-hidden shadow-lg mt-4 md:mt-0">
            <iframe
              title="Google Map of Muscat, Oman"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.6343421729775!2d58.38291551533583!3d23.585898584667317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8df4d1b4f1d5e7%3A0x8b8b8f2b0d3c97e4!2sMuscat%2C%20Oman!5e0!3m2!1sen!2s!4v1698999999999"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
