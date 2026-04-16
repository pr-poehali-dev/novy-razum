export default function Featured() {
  const stats = [
    { value: "200+", label: "Производителей" },
    { value: "70%", label: "Скидка от цены" },
    { value: "5 000+", label: "Позиций на складе" },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-neutral-50">
      <div className="flex-1 lg:h-screen lg:sticky lg:top-0 overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/16b84e5c-2f6a-4ae3-8af2-47d4978a0861/files/bcd0a846-11bb-4e04-affc-4fc7345dd393.jpg"
          alt="Мебельный шоурум"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between px-8 py-16 lg:py-24 lg:max-w-xl">
        <div>
          <p className="uppercase text-xs tracking-widest text-neutral-400 mb-6">Почему мы</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-8">
            Мебель от производителя — без наценок посредников
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed mb-12">
            Мы выкупаем остатки напрямую с фабрик и предлагаем их вам. 
            Никаких посредников, никаких накруток — только качественная мебель по честной цене.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-12 border-t border-neutral-200 pt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-1">{s.value}</p>
                <p className="text-xs text-neutral-400 uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="bg-neutral-900 text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-neutral-700 transition-colors duration-300 w-fit">
          Получить прайс-лист →
        </button>
      </div>
    </div>
  );
}
