import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  href: string;
}

export default function Button({ text, href }: ButtonProps) {
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
        className="inline-block hover:bg-secondary bg-primary  text-white px-6 py-2 rounded-full border border-white mt-8"
      >
        {text}
      </Link>
    </motion.div>
  );
}
