const printCards = [
  {
    number: "01",
    title: "Props",
    text: "Wearable parts, replicas and display pieces built layer by layer.",
    accent: "red"
  },
  {
    number: "02",
    title: "Functional",
    text: "Practical prints, custom parts and small solutions for everyday problems.",
    accent: "blue"
  },
  {
    number: "03",
    title: "Experiments",
    text: "Material tests, mechanisms, prototypes and ideas that are still evolving.",
    accent: "silver"
  }
];

const accentClasses = {
  red: "border-[#ff3545] bg-gradient-to-br from-[#d7192d] via-[#8f1020] to-[#420811]",
  blue: "border-[#3ca7ff] bg-gradient-to-br from-[#1167b1] via-[#073b77] to-[#031b3d]",
  silver: "border-[#d9e3ec] bg-gradient-to-br from-[#d7e0e7] via-[#8d9ba8] to-[#45515c] text-[#07111f]"
};

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030914] text-[#eef5fb]">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute left-[-10rem] top-20 h-[30rem] w-[30rem] rounded-full bg-[#d7192d]/25 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-10rem] top-[-4rem] h-[34rem] w-[34rem] rounded-full bg-[#0e65b7]/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-white/10 blur-[110px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-6 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/15 pb-5">
          <a href="/portfolio/" className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.24em] text-white transition hover:text-[#63b8ff]">
            <span className="grid h-9 w-9 place-items-center border border-[#9bc9ee]/40 bg-[#07182d] shadow-[inset_0_0_20px_rgba(34,125,209,.25)] [clip-path:polygon(18%_0,82%_0,100%_20%,100%_80%,82%_100%,18%_100%,0_80%,0_20%)]">
              VI
            </span>
            <span>3D / Forge</span>
          </a>
          <a
            href="/portfolio/"
            className="border border-[#9bc9ee]/35 bg-[#081426]/85 px-5 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#dcecff] transition hover:border-[#e62d3f] hover:bg-[#b71426] hover:text-white [clip-path:polygon(10px_0,100%_0,100%_calc(100%_-_10px),calc(100%_-_10px)_100%,0_100%,0_10px)]"
          >
            Portfolio
          </a>
        </header>

        <section className="grid items-center gap-14 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[3px] w-12 bg-[#e62d3f]" />
              <p className="text-xs font-black uppercase tracking-[0.32em] text-[#62b6f6]">3D printing / workshop</p>
            </div>

            <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.065em] sm:text-7xl lg:text-[7rem]">
              <span className="block text-[#f4f7fa]">Form.</span>
              <span className="block text-[#e62d3f]">Layer.</span>
              <span className="block bg-gradient-to-r from-[#45a7f6] via-[#d8ecfb] to-[#4389c0] bg-clip-text text-transparent">Object.</span>
            </h1>

            <p className="mt-8 max-w-xl border-l-2 border-[#e62d3f] pl-5 text-base leading-7 text-[#aebdcb] sm:text-lg">
              A workshop archive for parts, props, prototypes and anything worth turning from a digital model into a physical object.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Bambu Lab P1S", "PLA / PETG", "Prototyping", "Props"].map((item, index) => (
                <span
                  key={item}
                  className={`border px-4 py-2 text-[11px] font-black uppercase tracking-[0.13em] [clip-path:polygon(7px_0,100%_0,100%_calc(100%_-_7px),calc(100%_-_7px)_100%,0_100%,0_7px)] ${
                    index % 2 === 0
                      ? "border-[#e62d3f]/60 bg-[#42101a]/65 text-[#ffb8bf]"
                      : "border-[#49a6ec]/60 bg-[#082b50]/70 text-[#b7ddfb]"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[1.05/1] w-full max-w-[620px]">
            <div className="absolute inset-[3%] bg-[#111c28] shadow-[0_30px_80px_rgba(0,0,0,.55)] [clip-path:polygon(15%_0,85%_0,100%_18%,94%_82%,79%_100%,21%_100%,6%_82%,0_18%)]" />
            <div className="absolute inset-[7%] border border-[#a9c5dc]/35 bg-gradient-to-b from-[#162b41] via-[#08111e] to-[#03070d] [clip-path:polygon(15%_0,85%_0,100%_18%,94%_82%,79%_100%,21%_100%,6%_82%,0_18%)]" />

            <div className="absolute left-[10%] top-[15%] h-[39%] w-[35%] rotate-[-2deg] border-2 border-[#ff4b59] bg-gradient-to-br from-[#e12b3c] via-[#9a1322] to-[#4d0710] shadow-[inset_-18px_-18px_35px_rgba(0,0,0,.35)] [clip-path:polygon(16%_0,100%_10%,86%_100%,0_82%)]" />
            <div className="absolute right-[10%] top-[15%] h-[39%] w-[35%] rotate-[2deg] border-2 border-[#4cb3ff] bg-gradient-to-bl from-[#1678ca] via-[#075194] to-[#03284f] shadow-[inset_18px_-18px_35px_rgba(0,0,0,.35)] [clip-path:polygon(0_10%,84%_0,100%_82%,14%_100%)]" />

            <div className="absolute left-[19%] top-[20%] h-[22%] w-[27%] -skew-x-[10deg] border border-[#bfe9ff]/60 bg-gradient-to-br from-[#cceeff]/80 via-[#4f8fbb]/55 to-[#0c2235]/80] shadow-[inset_0_0_25px_rgba(164,221,255,.22)]" />
            <div className="absolute right-[19%] top-[20%] h-[22%] w-[27%] skew-x-[10deg] border border-[#bfe9ff]/60 bg-gradient-to-bl from-[#cceeff]/80 via-[#4f8fbb]/55 to-[#0c2235]/80] shadow-[inset_0_0_25px_rgba(164,221,255,.22)]" />

            <div className="absolute left-1/2 top-[46%] h-[34%] w-[52%] -translate-x-1/2 border-x-2 border-[#afbdc9]/55 bg-gradient-to-b from-[#8493a0] via-[#313d48] to-[#10171e] [clip-path:polygon(12%_0,88%_0,100%_18%,90%_100%,10%_100%,0_18%)]">
              <div className="absolute inset-x-[11%] top-[21%] space-y-2">
                {[0, 1, 2, 3, 4, 5].map((line) => (
                  <div key={line} className="h-[7px] border border-white/15 bg-[#06101a] shadow-[inset_0_1px_0_rgba(255,255,255,.18)]" />
                ))}
              </div>
              <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 text-center text-[10px] font-black uppercase tracking-[0.28em] text-[#dceaf5]/70">
                Layer by layer
              </div>
            </div>

            <div className="absolute bottom-[12%] left-[5%] h-[12%] w-[22%] bg-[#b51628] [clip-path:polygon(15%_0,100%_0,84%_100%,0_82%)]" />
            <div className="absolute bottom-[12%] right-[5%] h-[12%] w-[22%] bg-[#0d5da4] [clip-path:polygon(0_0,85%_0,100%_82%,16%_100%)]" />

            <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 border border-[#b8c8d5]/45 bg-[#07111d]/95 px-7 py-3 text-xs font-black uppercase tracking-[0.21em] text-[#dce8f2] shadow-[0_0_30px_rgba(37,136,212,.22)] [clip-path:polygon(10px_0,calc(100%_-_10px)_0,100%_50%,calc(100%_-_10px)_100%,10px_100%,0_50%)]">
              Make it real
            </div>
          </div>
        </section>

        <section className="border-t border-[#8fb2cc]/20 py-16">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#66b9f6]">Workshop inventory</p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.04em] text-white sm:text-5xl">The print shelf</h2>
            </div>
            <p className="hidden max-w-sm text-right text-sm leading-6 text-[#8da0b1] md:block">Projects and photos will be added as the collection grows.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {printCards.map((card) => (
              <article
                key={card.number}
                className={`group relative min-h-72 overflow-hidden border-2 p-6 shadow-[12px_12px_0_#01050a] transition duration-300 hover:-translate-y-1 ${accentClasses[card.accent as keyof typeof accentClasses]} [clip-path:polygon(14px_0,100%_0,100%_calc(100%_-_18px),calc(100%_-_18px)_100%,0_100%,0_14px)]`}
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rotate-45 border border-white/20 bg-white/5" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <p className="text-xs font-black uppercase tracking-[0.22em] opacity-70">Unit {card.number}</p>
                <div className="mt-16 h-px w-14 bg-current opacity-35" />
                <h3 className="mt-5 text-3xl font-black uppercase tracking-[-0.04em]">{card.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 opacity-75">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[#8fb2cc]/20 py-16">
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative overflow-hidden border border-[#6f94b0]/30 bg-[#07111f]/85 p-8 shadow-[inset_0_0_45px_rgba(28,97,150,.12)] backdrop-blur sm:p-10 [clip-path:polygon(16px_0,100%_0,100%_calc(100%_-_16px),calc(100%_-_16px)_100%,0_100%,0_16px)]">
              <div className="absolute left-0 top-0 h-1 w-1/3 bg-[#e62d3f]" />
              <div className="absolute right-0 top-0 h-1 w-1/3 bg-[#2593df]" />
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#65baff]">Archive bay</p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] text-white">Prints incoming.</h2>
              <p className="mt-5 max-w-xl leading-7 text-[#96a9b9]">
                Finished models, work-in-progress photos and print notes will live here. For now, this is the workshop door.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-[#e62d3f]/55 bg-gradient-to-b from-[#54101a] to-[#150409] p-6 [clip-path:polygon(12px_0,100%_0,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,0_100%,0_12px)]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff8792]">Status</p>
                <p className="mt-12 text-3xl font-black uppercase text-white">Building</p>
              </div>
              <div className="border border-[#3b9de5]/55 bg-gradient-to-b from-[#0b4378] to-[#031426] p-6 [clip-path:polygon(12px_0,100%_0,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,0_100%,0_12px)]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#82c9ff]">Archive</p>
                <p className="mt-12 text-3xl font-black uppercase text-white">Soon</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-[#8fb2cc]/20 py-8 text-xs font-bold uppercase tracking-[0.18em] text-[#71869a] sm:flex-row sm:items-center sm:justify-between">
          <span>Viktor Iliev / 3D Prints</span>
          <span>Built layer by layer</span>
        </footer>
      </div>
    </main>
  );
}
