import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const phrases = [
  "Everything starts with the right questions.",
  "Turn chaos into clarity.",
  "Great work begins with great onboarding.",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute text-[12rem] sm:text-[16rem] opacity-5 font-display text-brand -z-10 select-none pointer-events-none"
      >
        ClientFlow
      </div>

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="mb-4"
      >
        <span role="img" aria-label="spark" className="text-3xl">
          ✨
        </span>
      </motion.div>

      <h1 className="text-4xl sm:text-5xl font-display font-bold mb-3">
        Welcome to <span className="text-brand">ClientFlow</span>
      </h1>

      <div className="mb-6 text-sm italic h-5">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-center whitespace-nowrap text-slate-600 dark:text-indigo-200"
          >
            {phrases[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <p className="max-w-md mb-10 text-slate-600 dark:text-indigo-200">
        An elegant, frictionless onboarding flow — crafted with clarity and
        care.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/login"
            className="px-6 py-2 rounded-full bg-brand text-white hover:bg-brand-dark transition"
          >
            Start Onboarding
          </Link>
          <p className="text-xs mt-2 text-slate-600 dark:text-indigo-200">
            No signup needed
          </p>
        </motion.div>
      </div>
    </motion.main>
  );
}
