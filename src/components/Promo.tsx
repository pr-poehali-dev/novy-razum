import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/16b84e5c-2f6a-4ae3-8af2-47d4978a0861/files/1232d6f3-d634-4183-bf32-b20ad0569eaf.jpg"
            alt="Мебельное производство"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </div>

      <p className="absolute top-10 left-8 text-white/50 uppercase z-10 text-xs tracking-[0.3em]">
        Ассортимент
      </p>

      <div className="absolute bottom-10 left-8 z-10 max-w-xl">
        <p className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8">
          Диваны, столы, шкафы, кресла — всё в наличии и готово к отгрузке сегодня.
        </p>
        <button className="border border-white/40 text-white px-7 py-3 uppercase text-xs tracking-widest hover:border-white hover:bg-white/10 transition-all duration-300">
          Посмотреть наличие
        </button>
      </div>
    </div>
  );
}
