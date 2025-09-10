'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Data from '@/data/data';
import Image from 'next/image';
import Modal from '@/components/modal/page';
import { sectionProps, dataProps } from '@/interfaces/interfaces';

export default function Pagina({ sections, marca }: sectionProps) {
  const [changeSection, setChangeSection] = useState<string | null>('Todos');
  const [selectedItem, setSelectedItem] = useState<dataProps | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const dataFiltered = Data.filter(
    item =>
      item.marca === marca &&
      (item.section === changeSection || changeSection === 'Todos')
  );

  return (
    <section className="w-full max-w-[1200px] mx-auto">
      <div className="flex justify-center">
        <ul className="flex gap-4 justify-around w-full flex-col lg:gap-2 lg:flex-row flex-wrap px-6 lg:px-0">
          {sections.map((section, index) => {
            return (
              <li
                key={index}
                className={`${changeSection === section ? 'bg-primary text-white' : ''} flex items-center justify-center border border-primary py-3 px-3 rounded-full cursor-pointer relative text-center`}
                onClick={() => setChangeSection(section)}
              >
                {section}
                {changeSection === section && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    exit={{ width: 0 }}
                    className="absolute left-0 right-0 -bottom-2 h-[2px] bg-primary"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex justify-center mt-16 gap-10 w-full flex-wrap">
        {dataFiltered.length === 0 ? (
          <p className="text-center text-black max-w-[500px] mx-auto text-lg md:text-xl font-light">
            No hay productos disponibles.
            <br />
            <span className="font-semibold">
              Contacta con un asesor para consultar productos similares.
            </span>
          </p>
        ) : (
          dataFiltered.map((item, index) => (
            <div
              key={index}
              className={`relative ${
                changeSection === item.section || changeSection === 'Todos'
                  ? 'block'
                  : 'hidden'
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={220}
                height={320}
                className="object-cover cursor-pointer hover:scale-105 transition-all rounded-2xl"
                onClick={() => {
                  setSelectedItem(item);
                  setOpenModal(true);
                }}
              />
            </div>
          ))
        )}
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          item={selectedItem}
        />
      </div>
    </section>
  );
}
