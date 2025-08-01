'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const sections = [
  { image: '/hero/hero-4.jpg', title: 'Intrumentos de Medición' },
  { image: '/hero/hero-4.jpg', title: 'Plataformas de Gestión' },
  { image: '/hero/hero-4.jpg', title: 'Capacitación' },
];

export default function Page() {
  return (
    <section className="min-h-screen h-max mt-16">
      <article id="lr-cloud">
        <div className="w-full h-full relative flex flex-col md:flex-row">
          <Image
            src="/hero/hero-4.jpg"
            width={1920}
            height={1080}
            alt="LR Logo"
            className="object-cover w-screen h-[500px]"
          />
          <div className="absolute top-1/2 translate-y-[-80%] translate-x-[30%]">
            <h2 className="text-6xl font-medium text-white">
              LR CLOUD SERVICE
            </h2>
            <p className="text-white font-medium text-[28.5px]">
              MÉDICIÓN INTELIGENTE,{' '}
              <span className="text-white font-light text-[28.5px]">
                IMPACTO REAL
              </span>
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
            className="absolute -bottom-20 justify-center flex w-full"
          >
            <ul className="flex flex-col md:flex-row gap-6">
              <li className="flex flex-col items-center justify-center gap-4 bg-primary h-[220px] w-[420px] rounded-2xl"></li>
              {sections.map((section, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center justify-center gap-4 bg-primary h-[220px] w-[200px] rounded-2xl"
                >
                  <Image
                    src={section.image}
                    width={10}
                    height={10}
                    alt="LR Logo"
                    className="w-20 h-20 rounded-2xl object-cover"
                  />
                  <p className="text-white text-center">{section.title}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </article>

      <article className="w-full mx-auto mt-40 min-h-screen h-max flex flex-col gap-10 items-center">
        <div className="flex gap-10 max-w-[1100px] mx-auto">
          <Image
            src="/hero/hero-4.jpg"
            width={1920}
            height={1080}
            alt="LR Logo"
            className="object-cover w-[600px] h-[300px]"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-medium text-title">
              LR CLOUD SERVICE
            </h2>
            <p className="text-[28.5px] font-medium">Medición Inteligente</p>
            <p>
              En LR Electricos, creemos que la innovación es la clave para
              impulsar el control eléctrico. Nuestra empresa se especializa en
              la creación de soluciones innovadoras que permiten a nuestros
              clientes mejorar su eficiencia energética y reducir sus costos.
            </p>
          </div>
        </div>
        <Image
          src="/hero/hero-4.jpg"
          width={1920}
          height={1080}
          alt="LR Logo"
          className="object-cover max-w-[1100px] h-[300px]"
        />
      </article>
    </section>
  );
}
