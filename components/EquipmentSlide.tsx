'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

type carosel = {
  heading: string;
  image: string;
  description: string;
};

export function EquipmentGallery({}) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const firstCarosel: carosel[] = [
    {
      heading: 'Falcon is API Q2 Registered',
      image: '/images/image1.jpg',
      description:
        'API Q2 is a high standard that sets the requirements for quality management systems of service delivery. We are proud to have achieved this milestone as it shows our commitment to quality, safety, continuous improvement and customer satisfaction. This achievement is part of the company’s vision to be the leading Omani services provider',
    },
    {
      heading: 'FDS Celebrates 7 Years LTI Free ',
      image: '/images/image2.png',
      description:
        'Falcon Drilling Systems (FDS) Celebrates another year of LTI Free which marks 7 years in a row without lost time injury',
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="md:w-8/12 relative">
        <Carousel
          plugins={[plugin.current]}
          className=""
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="flex">
            {firstCarosel.map((item) => (
              <CarouselItem
                key={item.heading}
                className="flex justify-center items-center"
              >
                <div className="p-1 lg:w-[800px] md:w-1/2">
                  <Card>
                    <CardContent className="flex items-center justify-center flex-col gap-3 p-5">
                      <Image
                        src={item.image}
                        alt={item.heading}
                        width={800}
                        height={500}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-4xl font-bold text-gray-700 z-10"
            aria-label="Previous Slide"
          >
            <CarouselPrevious>&lt;</CarouselPrevious>
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-4xl font-bold text-gray-700 z-10"
            aria-label="Next Slide"
          >
            <CarouselNext>&gt;</CarouselNext>
          </button>
        </Carousel>
      </div>
    </div>
  );
}
