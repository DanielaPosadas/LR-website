'use client';
import { dataProps } from '@/interfaces/interfaces';
import { useEffect } from 'react';
import Image from 'next/image';
import ModalButton from '@/components/modalButton/page';
import images from '@/data/images';
import Carousel from '../carousel/carousel';

export default function Modal({
  item,
  open,
  onClose,
}: {
  item: dataProps | null;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
      document.body.classList.add('fixed');
    } else {
      document.body.classList.remove('overflow-hidden');
      document.body.classList.remove('fixed');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.body.classList.remove('fixed');
    };
  }, [open]);
  return (
    <div
      className={
        open ? 'fixed inset-0 z-50 flex items-center justify-center' : 'hidden'
      }
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative z-10 w-full max-w-[1200px] rounded-lg bg-white p-2 md:p-6 shadow-lg overflow-y-auto max-h-[90vh]">
        <button onClick={onClose} className="absolute top-2 right-4">
          X
        </button>
        <article className="flex py-6 justify-center gap-10 flex-col lg:flex-row">
          <section className="flex flex-col gap-4 w-full md:w-6/12 lg:w-4/12 md:mx-auto">
            {images.map(image => {
              if (image.model === item?.model) {
                return (
                  <Carousel
                    images={image.imagesArr}
                    slides={1}
                    key={image.model}
                    alt={image.marca + ' ' + image.model}
                  />
                );
              }
            })}
            <ul className="flex gap-6 justify-center mx-auto w-full">
              {item?.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 md:w-6/12 justify-center"
                >
                  <Image
                    src={benefit.image}
                    width={50}
                    height={50}
                    alt={benefit.title}
                    className="rounded-full object-contain p-2 bg-primary"
                  />
                  <p>{benefit.title}</p>
                </li>
              ))}
            </ul>
          </section>
          <section className="flex flex-col gap-6 lg:w-7/12 w-full px-6 pb-6 overflow-y-auto font-light md:mx-auto lg:mx-0">
            <h2 className="text-2xl font-semibold uppercase">
              {item?.title} <span className="pl-1">{item?.model}</span>
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-semibold uppercase">
                Descripción general
              </p>
              <p className="font-light text-base">{item?.description}</p>
            </div>
            <p className="text-base font-normal hover:underline cursor-pointer hover:bg-primary hover:text-white bg-blue-50 text-title px-6 py-2 rounded-full text-right w-fit ml-auto">
              Descargar ficha técnica
            </p>
            <div>
              <p className="text-xl font-semibold uppercase">
                Caraterísticas destacables
              </p>
              <ul className="flex gap-2 md:justify-around pt-4 w-full flex-wrap lg:flex-nowrap">
                {item?.technicalData.map((technicalData, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 md:max-w-[200px]"
                  >
                    <Image
                      src={'/icons/destacable.png'}
                      width={40}
                      height={40}
                      alt="LR Logo"
                      className="object-contain rounded-full bg-primary p-2"
                    />
                    <p>{technicalData}</p>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center gap-2 pt-6">
                <Image
                  src={'/icons/envio.png'}
                  width={20}
                  height={20}
                  alt="LR Logo"
                  className="rounded-full object-cover w-20 h-20 md:w-5 md:h-5"
                />
                <p>
                  Este producto cuenta con{' '}
                  <span className="font-medium underline">
                    envío gratis dentro del área metropolitana
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-end gap-2 mt-6 bg-primary text-white text-2xl px-6 py-2 rounded-full w-fit ml-auto text-right">
                <p className="font-semibold">Precio</p>
                <p className="font-semibold">{item?.price}</p>
                <p className="font-semibold">+ IVA</p>
              </div>
              <div className="flex items-center justify-center w-full ">
                <ModalButton product={item?.title + ' ' + item?.model || ''} />
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
