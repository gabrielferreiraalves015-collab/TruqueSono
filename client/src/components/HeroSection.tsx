import babyImage from "@assets/baby-bg-8f52a2c2157cb615c5e9b1d8806b6c91_1762962856041.png";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="space-y-8">
          <div className="absolute right-0 top-1/4 w-4/5 md:w-3/5 -translate-y-1/4 flex items-center justify-end">
            <img
              src={babyImage}
              alt="Bebê dormindo tranquilamente"
              className="w-full h-auto object-contain opacity-70 scale-125"
              data-testid="img-hero-baby"
            />
          </div>
          <h1 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-relaxed text-center text-white max-w-4xl mx-auto uppercase">
            <span className="inline-block">
              Sleep "Trick"
              <div className="h-1 bg-red-600 mt-1" />
            </span>
            {" "}Fixes the Root Cause of{" "}
            <span className="block">Nonrestorative Sleep</span>
          </h1>

          <h2 
            className="relative z-10 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-center max-w-4xl mx-auto uppercase"
            style={{ color: '#FFEE00' }}
          >
            para que você durma a noite toda e acorde se sentindo
            revigorado, descansado e pronto para começar o dia.
          </h2>

          <div className="relative z-10 space-y-6 max-w-3xl mx-auto pt-4">
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
