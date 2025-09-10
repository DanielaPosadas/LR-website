'use client';

import Image from 'next/image';
import Carousel from '@/components/carousel/carousel';
import Button from '@/components/motionButton/button';
import Sections from '@/components/productSections/pagina';
import { useState } from 'react';
import { motion } from 'framer-motion';

const images = ['/hero/hero-4.jpg', '/hero/hero-4.jpg', '/hero/hero-4.jpg'];
const logoBrands = {
  blanco: [
    '/brands/metrel.png',
    '/brands/meatrol.png',
    '/brands/elmeasure.png',
  ],
  color: [
    '/brands/metrel-color.png',
    '/brands/meatrol-color.png',
    '/brands/elmeasure-color.png',
  ],
};

const products = [
  {
    image: '/hero/hero-4.jpg',
    alt: 'Product 1',
  },
  {
    image: '/hero/hero-4.jpg',
    alt: 'Product 2',
  },
  {
    image: '/hero/hero-4.jpg',
    alt: 'Product 3',
  },
  {
    image: '/hero/hero-4.jpg',
    alt: 'Product 4',
  },
  {
    image: '/hero/hero-4.jpg',
    alt: 'Product 5',
  },
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
  const [changeLogo, setChangeLogo] = useState<string | null>('Metrel');
  const logos = ['Metrel', 'Meatrol', 'Elmeasure'];
  const sections = [
    'Todos',
    'Calidad de Energía',
    'Probadores de Continuidad',
    'Probador de Relación de Transformador',
    'Resistencia de Aislamiento',
    'Resistencia de Tierras',
  ];

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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="md:max-w-7xl w-full md:mx-auto h-auto flex flex-wrap md:justify-around mt-16 items-center gap-10 justify-center"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`${changeLogo === logo ? 'bg-primary' : ''} w-5/12 flex justify-center md:w-3/12 cursor-pointer min-h-[120px] rounded-2xl`}
              onClick={() => setChangeLogo(logo)}
            >
              <Image
                src={`${changeLogo === logo ? logoBrands.blanco[index] : logoBrands.color[index]}`}
                width={200}
                height={200}
                alt={`${logo} Logo`}
                className="object-contain w-28 md:w-36 lg:w-52 xl:w-64"
              />
            </div>
          ))}
        </motion.div>
        <article className="mt-16 lg:min-h-[500px] min-h-[700px]">
          <Sections sections={sections} marca={changeLogo} />
        </article>
      </article>
      <article className="w-full h-auto flex justify-around mt-16 items-center gap-10 ">
        <Carousel images={images} slides={1} alt="LR Logo" />
      </article>
      <article className="w-full h-auto flex justify-around mt-16 items-center gap-10 flex-col">
        <h2 className="text-2xl md:text-4xl font-medium text-title text-center">
          PRODUCTOS RELACIONADOS
        </h2>
        <Carousel
          images={products.map(product => product.image)}
          slides={3}
          breakpoints={breakpoints}
          alt={products.map(product => product.alt)}
        />
        <Button text="CONTACTA A UN ASESOR" href="/contacto" />
      </article>
    </section>
  );
}
