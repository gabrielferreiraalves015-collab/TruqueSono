import babyImage from "@assets/baby-bg-8f52a2c2157cb615c5e9b1d8806b6c91_1762959791189.png";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden md:block">
        <img
          src={babyImage}
          alt="Bebê dormindo tranquilamente"
          className="w-full h-full object-cover object-center opacity-60"
          data-testid="img-hero-baby"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="space-y-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center">
            <span className="block text-white">Truque do sono</span>
            <span className="block text-white">
              Corrige a causa principal do sono não reparador
            </span>
          </h1>

          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-center max-w-4xl mx-auto"
            style={{ color: '#FFEE00' }}
          >
            para que você durma a noite toda e acorde se sentindo
            revigorado, descansado e pronto para começar o dia.
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto pt-8">
            <div className="flex gap-4 items-start">
              <div className="w-1 flex-shrink-0 self-stretch min-h-[4rem]" style={{ backgroundColor: '#FFEE00' }} />
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Para quem tem dificuldade em dormir bem à noite.
                <br />- Pode ser bastante frustrante.
              </p>
            </div>

            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Você pode estar dormindo, deitado imóvel na cama por oito ou
              nove horas todas as noites, e ainda assim acordar todas as
              manhãs com a sensação de que não dormiu nada.
            </p>

            <p className="text-2xl md:text-3xl font-semibold text-white pt-6" data-testid="text-familiar">
              Parece familiar?
            </p>
          </div>
        </div>
      </div>

      <div className="w-full relative">
        <img
          src="https://assets-v0.cdn-bio.com/img/trans/from-red-red.png"
          alt=""
          className="w-full h-auto"
          data-testid="img-transition"
        />
      </div>
    </section>
  );
}
