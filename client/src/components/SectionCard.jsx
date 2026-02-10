import { motion } from 'framer-motion';

export default function SectionCard({ title, children }) {
  return (
    <motion.section
      className="card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <h2>{title}</h2>
      {children}
    </motion.section>
  );
}
