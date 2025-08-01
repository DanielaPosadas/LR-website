'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

interface ImagesProps {
  images: string[];
  slides: number;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
    };
  };
}

export default function Carousel({ images, slides, breakpoints }: ImagesProps) {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={slides}
      pagination={{ clickable: true }}
      navigation={true}
      breakpoints={breakpoints}
      className="w-10/12 max-h-[400px]"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image src={image} alt="LR Logo" width={1920} height={400} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
