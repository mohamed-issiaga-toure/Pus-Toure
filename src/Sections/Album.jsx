import albumPhotos from '../data/albumPhotos'

function Album() {
  return (
    <section
      id="album"
      className="py-24 bg-dark-bg overflow-hidden relative"
    >

      {/* ===== GLOW DÉCORATIF ===== */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-linear-to-r from-primary to-purple-600 opacity-20 blur-3xl rounded-full pointer-events-none"></div>

      {/* ===== HEADER ===== */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            En images
          </p>

          <h2 className="text-3xl md:text-4xl font-medium text-slate-200">
            Mon album
          </h2>

          <div className="w-12 h-0.5 bg-primary mt-4"></div>
        </div>

      </div>

      {/* ===== GALERIE 2 LIGNES ===== */}
      <div className="relative z-10 space-y-10">

        {/* ===== FONDU GAUCHE ===== */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-dark-bg to-transparent z-10 pointer-events-none"></div>

        {/* ===== FONDU DROIT ===== */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-dark-bg to-transparent z-10 pointer-events-none"></div>

        {/* =========================
            LIGNE 1
        ========================== */}
        <div className="flex animate-scroll w-max">

          {[...albumPhotos, ...albumPhotos].map((photo, index) => (
            <div
              key={`row1-${index}`}
              className={`w-36 h-44 -mx-4.5 rounded-2xl border-2 border-dark-border overflow-hidden shrink-0 shadow-2xl hover:scale-105 hover:z-20 hover:rotate-0 transition-transform duration-300 ${
                index % 2 === 0 ? 'rotate-[-8deg]' : 'rotate-6'
              }`}
            >
              <img
                src={photo.src}
                alt={`Photo ${photo.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

        </div>

        {/* =========================
            LIGNE 2 (décalée)
        ========================== */}
        <div className="flex animate-scroll w-max -mt-6">

          {/* 🔥 même dataset mais key différente pour éviter conflit */}
          {[...albumPhotos, ...albumPhotos].map((photo, index) => (
            <div
              key={`row2-${index}`}
              className={`w-36 h-44 -mx-4.5 rounded-2xl border-2 border-dark-border overflow-hidden shrink-0 shadow-2xl hover:scale-105 hover:z-20 hover:rotate-0 transition-transform duration-300 ${
                index % 2 === 0 ? 'rotate-6' : 'rotate-[-8deg]'
              }`}
            >
              <img
                src={photo.src}
                alt={`Photo ${photo.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Album