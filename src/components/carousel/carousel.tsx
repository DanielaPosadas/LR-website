'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { ImagesProps } from '@/interfaces/interfaces';

export default function Carousel({
  images,
  slides,
  breakpoints,
  alt,
}: ImagesProps) {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={slides}
      pagination={{ clickable: true }}
      navigation={true}
      breakpoints={breakpoints}
      className="w-full"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            alt={alt[index]}
            width={1920}
            height={400}
            className="rounded-2xl object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
