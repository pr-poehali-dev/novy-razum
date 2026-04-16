export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-950 py-6 sm:py-8 lg:py-10 px-8 h-full w-full flex flex-col justify-between">

            <div className="flex justify-between items-start">
              <div className="flex gap-16">
                <div className="flex flex-col gap-2">
                  <h3 className="mb-2 uppercase text-neutral-600 text-xs tracking-widest">Каталог</h3>
                  <a href="#sofas" className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm">Диваны</a>
                  <a href="#tables" className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm">Столы и стулья</a>
                  <a href="#wardrobes" className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm">Шкафы</a>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="mb-2 uppercase text-neutral-600 text-xs tracking-widest">Компания</h3>
                  <a href="#about" className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm">О нас</a>
                  <a href="#delivery" className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm">Доставка</a>
                  <a href="#contact" className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm">Контакты</a>
                </div>
              </div>

              <button className="border border-neutral-700 text-white px-6 py-3 uppercase text-xs tracking-widest hover:border-white hover:bg-white hover:text-black transition-all duration-300 hidden sm:block">
                Получить прайс
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <h1 className="text-[16vw] sm:text-[14vw] lg:text-[12vw] leading-[0.85] text-white font-bold tracking-tight">
                МЕБЕЛЬ
              </h1>
              <p className="text-neutral-600 text-xs uppercase tracking-widest">{new Date().getFullYear()} МебельСток</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
