interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 px-8 py-5 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <nav className="flex gap-6">
          <a href="#about" className="text-white/70 hover:text-white transition-colors duration-300 uppercase text-xs tracking-widest">
            О нас
          </a>
          <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300 uppercase text-xs tracking-widest">
            Контакты
          </a>
        </nav>
        <div className="text-white font-bold text-lg uppercase tracking-[0.2em]">МебельСток</div>
      </div>
    </header>
  );
}
