'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhatsButton() {
  const mensaje = `Hola. Me gustaría obtener información sobre un producto.`;
  const telefono = '525560883141';
  const href = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
  return (
    <motion.div
      className="w-12 h-12 bg-[#24d365] flex items-center justify-center rounded-full bottom-4 right-4 z-50 fixed md:bottom-16 md:right-16"
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Image
        src="/whatsButton/social.png"
        width={50}
        height={50}
        alt="Contácta a un asesor"
        title="Contácta a un asesor"
        onClick={() => window.open(href, '_blank')}
        className="w-10 h-10 rounded-2xl object-cover cursor-pointer"
      />
    </motion.div>
  );
}
