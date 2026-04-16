import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/16b84e5c-2f6a-4ae3-8af2-47d4978a0861/files/c23eaabc-501f-4dc8-93e4-097ab497c12d.jpg"
            alt="Мебельный склад"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm uppercase tracking-widest mb-4 opacity-70">Прямо с производства</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          МЕБЕЛЬ<br/>СО СКЛАДА
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10">
          Остатки от ведущих мебельных производств — по ценам ниже рынка до 70%
        </p>
        <button className="border border-white text-white px-8 py-3 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          Смотреть каталог
        </button>
      </div>
    </div>
  );
}