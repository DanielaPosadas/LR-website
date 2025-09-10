'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  product: string;
}

export default function ModalButton({ product }: ButtonProps) {
  const mensaje = `Hola. Me gustaría cotizar el producto: ${product}`;
  const telefono = '525560883141';
  const href = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1, duration: 0.6 }}
    >
      <Link
        href={href}
        target="_blank"
        className="inline-block hover:bg-secondary bg-gray-400  text-white px-6 py-3 rounded-full w-full min-w-[300px] my-6 text-center font-medium text-lg"
      >
        Solicitar cotización
      </Link>
    </motion.div>
  );
}
