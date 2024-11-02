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

export function CarouselPlugin({}) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
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

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Change 768 to your breakpoint
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div className="md:w-1/2 ">
        <Carousel
          plugins={[plugin.current]}
          className=""
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {firstCarosel?.map((item) => (
              <CarouselItem key={item.heading}>
                <div className="md:p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center flex-col gap-3">
                      <h2 className="font-semibold text-2xl text-green-600">
                        {item.heading}
                      </h2>
                      <Image
                        src={item.image}
                        alt={item.heading}
                        width={400}
                        height={16}
                      />
                      <p className="font-semibold text-sm text-black md:w-[80%]">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {!isMobile && <CarouselPrevious />}
          {!isMobile && <CarouselNext />}
        </Carousel>
      </div>
    </div>
  );
}
