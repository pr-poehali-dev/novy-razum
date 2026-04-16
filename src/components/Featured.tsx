export default function Featured() {
  const stats = [
    { value: "200+", label: "Производителей" },
    { value: "70%", label: "Скидка от цены" },
    { value: "5 000+", label: "Позиций на складе" },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      <div className="flex-1 lg:h-screen lg:sticky lg:top-0 overflow-hidden order-2 lg:order-1">
        <img
          src="https://cdn.poehali.dev/projects/16b84e5c-2f6a-4ae3-8af2-47d4978a0861/files/bcd0a846-11bb-4e04-affc-4fc7345dd393.jpg"
          alt="Мебельный шоурум"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center px-10 py-20 lg:py-32 order-1 lg:order-2 bg-neutral-950 text-white">
        <p className="uppercase text-xs tracking-[0.3em] text-neutral-500 mb-8">Почему мы</p>

        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-10">
          Мебель напрямую.<br />Без наценок.
        </h2>

        <p className="text-neutral-400 text-base leading-relaxed mb-14 max-w-sm">
          Мы выкупаем остатки напрямую с фабрик и предлагаем их вам. 
          Никаких посредников — только качественная мебель по честной цене.
        </p>

        <div className="grid grid-cols-3 gap-0 mb-16 border-t border-neutral-800 pt-10">
          {stats.map((s, i) => (
            <div key={s.label} className={`${i < 2 ? "border-r border-neutral-800 pr-6 mr-6" : ""}`}>
              <p className="text-3xl lg:text-4xl font-bold text-white mb-1">{s.value}</p>
              <p className="text-xs text-neutral-500 uppercase tracking-wide leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="border border-white text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Получить прайс-лист
          </button>
          <span className="text-neutral-600 text-xs uppercase tracking-widest">Бесплатно</span>
        </div>
      </div>
    </div>
  );
}
