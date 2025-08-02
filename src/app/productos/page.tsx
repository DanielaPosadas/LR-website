'use client';

import Image from 'next/image';
import Carousel from '@/components/carousel/carousel';
import Button from '@/components/motionButton/button';
import { useState } from 'react';

const images = ['/hero/hero-4.jpg', '/hero/hero-4.jpg', '/hero/hero-4.jpg'];

const products = [
  '/hero/hero-4.jpg',
  '/hero/hero-4.jpg',
  '/hero/hero-4.jpg',
  '/hero/hero-4.jpg',
  '/hero/hero-4.jpg',
];

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
};

export default function Page() {
  const [changeLogo, setChangeLogo] = useState<string | null>(null);
  const logos = ['Metrel', 'Meatrol', 'Elmeasure'];

  return (
    <section className="w-full h-max min-h-screen mt-8 md:my-16">
      <article className="w-full min-h-[400px] flex bg-primary flex-col  items-center">
        <div className="pt-16 flex flex-col items-center px-6">
          <p className="text-xl md:text-2xl font-light text-white">NUESTROS</p>
          <h2 className="text-3xl md:text-6xl font-medium text-white">
            PRODUCTOS
          </h2>
          <p className="text-white max-w-xl text-center font-light text-base md:text-lg mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, quod, quibusdam, quia quae quos quidem quas quia quia
            voluptatibus, quod, quibusdam, quia quae quos quidem quas quia quia.
          </p>
          <Button text="CONTACTA A UN ASESOR" href="/contacto" />
        </div>
      </article>
      <article>
        <div className="md:max-w-6xl w-full md:mx-auto h-auto flex flex-wrap md:justify-around mt-16 items-center gap-10 justify-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`${changeLogo === logo ? 'bg-primary' : ''} w-5/12 flex justify-center md:w-3/12 cursor-pointer min-h-[120px]`}
              onClick={() => setChangeLogo(logo)}
            >
              <Image
                src={`${changeLogo === logo ? '/favicon.ico' : '/next.svg'}`}
                width={100}
                height={100}
                alt="LR Logo"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </article>
      <article className="w-full h-auto flex justify-around mt-16 items-center gap-10 ">
        <Carousel images={images} slides={1} />
      </article>
      <article className="w-full h-auto flex justify-around mt-16 items-center gap-10 flex-col">
        <h2 className="text-2xl md:text-4xl font-medium text-title text-center">
          PRODUCTOS MÁS VENDIDOS
        </h2>
        <Carousel images={products} slides={3} breakpoints={breakpoints} />
        <Button text="CONTACTA A UN ASESOR" href="/contacto" />
      </article>
    </section>
  );
}
