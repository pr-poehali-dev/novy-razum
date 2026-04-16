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
      className="relative flex items-end justify-between h-screen overflow-hidden pb-14 px-8"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/16b84e5c-2f6a-4ae3-8af2-47d4978a0861/files/c23eaabc-501f-4dc8-93e4-097ab497c12d.jpg"
            alt="Мебельный склад"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        </div>
      </motion.div>

      <div className="relative z-10 text-white max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] mb-4 text-white/60">Прямо с производства</p>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
          МЕБЕЛЬ<br />СО СКЛАДА
        </h1>
        <p className="text-base md:text-lg text-white/75 max-w-md leading-relaxed">
          Остатки от ведущих мебельных производств — по ценам ниже рынка до 70%
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-end gap-4">
        <button className="bg-white text-black px-7 py-3 uppercase text-xs tracking-widest font-semibold hover:bg-white/90 transition-all duration-300">
          Смотреть каталог
        </button>
        <a href="#about" className="text-white/50 text-xs uppercase tracking-widest hover:text-white transition-colors duration-300">
          Узнать больше ↓
        </a>
      </div>
    </div>
  );
}
