'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/motionButton/button';

export default function Page() {
  const sections = [
    { image: '/hero/hero-4.jpg', title: 'Intrumentos de Medición' },
    { image: '/hero/hero-4.jpg', title: 'Plataformas de Gestión' },
    { image: '/hero/hero-4.jpg', title: 'Capacitación' },
    { image: '/hero/hero-4.jpg', title: 'Servicio al Cliente' },
  ];
  return (
    <section className="flex min-h-screen h-max flex-col">
      <section className="w-full h-full flex relative flex-col md:flex-row">
        <Image
          src="/hero/hero-4.jpg"
          width={1440}
          height={820}
          alt="LR Logo"
          className="object-cover w-screen h-screen absolute top-0 left-0 z-0"
        />
        <div className="z-10 justify-center items-center md:items-start flex flex-col h-screen w-full md:w-fit xl:mx-64 lg:mx-44 md:mx-28 pt-16">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="xl:text-3xl lg:text-2xl md:text-xl text-base text-white font-base"
          >
            IMPULSAMOS EL CONTROL ELÉCTRICO
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="xl:text-[64px] lg:text-[51px] md:text-[42px] text-[34px] text-white font-medium"
          >
            CON INNOVACIÓN
          </motion.h1>

          <Button text="CONOCE MÁS" href="#home" />
        </div>

        <article className="md:w-11/12 lg:w-10/12 w-full md:absolute md:-bottom-20 md:left-1/2 md:-translate-x-1/2 bg-primary z-10 h-1/4 md:rounded-2xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full h-full md:rounded-2xl z-10"
          >
            <ul className="flex flex-col md:flex-row gap-10 items-center justify-center h-full">
              {sections.map((section, index) => {
                return (
                  <li
                    key={index}
                    className="flex flex-col items-center text-center md:w-1/5 w-full h-full py-4 justify-center"
                  >
                    <Image
                      src={section.image}
                      width={10}
                      height={10}
                      alt="LR Logo"
                      className="w-20 h-20 rounded-2xl object-cover"
                    />
                    <p className="text-white">{section.title}</p>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </article>
      </section>
      <section className="max-w-6xl mx-auto my-40 min-h-screen h-max" id="home">
        <article className="flex flex-col gap-10 mb-10 items-center p-5 md:p-0">
          <div className="flex flex-col items-center">
            <div className="relative mb-10">
              <h2 className="absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] text-5xl font-medium text-title opacity-5">
                INNOVACIÓN
              </h2>
              <p className="absolute text-2xl top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
                Innovación
              </p>
            </div>
            <p className="max-w-xl text-center">
              En LR Electricos, creemos que la innovación es la clave para
              impulsar el control eléctrico. Nuestra empresa se especializa en
              la creación de soluciones innovadoras que permiten a nuestros
              clientes mejorar su eficiencia energética y reducir sus costos.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:w-10/12 lg:w-8/12 w-full gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center gap-4"
            >
              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/hero/hero-4.jpg"
                  width={10}
                  height={10}
                  alt="LR Logo"
                  className="w-20 h-20 rounded-2xl object-cover"
                />
                <div className="flex flex-col">
                  <p>LR CLOUD SERVICE</p>
                  <p>
                    En LR Electricos, creemos que la innovación es la clave para
                    impulsar el control eléctrico.
                  </p>
                </div>
              </div>
              <Button text="CONOCE MÁS" href="/lr-cloud" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center gap-4"
            >
              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/hero/hero-4.jpg"
                  width={10}
                  height={10}
                  alt="LR Logo"
                  className="w-20 h-20 rounded-2xl object-cover"
                />
                <div className="flex flex-col">
                  <p>TIENDA EN LÍNEA</p>
                  <p>
                    En LR Electricos, creemos que la innovación es la clave para
                    impulsar el control eléctrico.
                  </p>
                </div>
              </div>
              <Button text="CONOCE MÁS" href="/tienda" />
            </motion.div>
          </div>
        </article>
        <Image
          src="/hero/hero-4.jpg"
          width={1440}
          height={820}
          alt="LR Logo"
          className="object-cover w-screen h-[400px]"
        />
      </section>
    </section>
  );
}
