"use client";
import Link from "next/link";

export default function CatalogoPublicaciones() {
  const publicaciones = [
    { titulo: "Blockchain y Gobernanza Digital", autor: "Maestrantes de Informática", categoria: "Paper Académico", costo: "15 $UPTA" },
    { titulo: "Optimización de Smart Grids en Venezuela", autor: "Cuerpo Docente Postgrado", categoria: "Libro de Autoría", costo: "30 $UPTA" },
    { titulo: "Ética en la IA y Agentes LLM", autor: "Jimmy Noriega", categoria: "Artículo Científico", costo: "20 $UPTA" },
    { titulo: "Arquitecturas de Virtualización Cloud", autor: "Editorial Pearson (Comercial)", categoria: "Literatura Técnica", costo: "50 $UPTA" },
    { titulo: "Manual de Automatización Industrial", autor: "Investigadores Sede La Victoria", categoria: "Guía de Estudio", costo: "10 $UPTA" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-black text-blue-400 uppercase">Catálogo de Conocimiento</h2>
          <p className="text-white opacity-70">Adquisición de material bibliográfico vía Blockchain</p>
        </header>

        <div className="grid gap-6">
          {publicaciones.map((pub, i) => (
            <div key={i} className="bg-slate-800 border border-slate-700 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center group hover:border-blue-500 transition-colors shadow-2xl">
              <div className="mb-4 md:mb-0">
                <span className="px-3 py-1 bg-blue-900 text-blue-300 text-[10px] font-bold rounded-full uppercase tracking-tighter">
                  {pub.categoria}
                </span>
                <h3 className="text-xl font-bold mt-2 group-hover:text-blue-400 transition-colors">{pub.titulo}</h3>
                <p className="text-sm opacity-60 italic">Por: {pub.autor}</p>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <span className="text-2xl font-mono text-green-400 font-bold mb-2">{pub.costo}</span>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(pub.titulo);
                    alert(`📖 "${pub.titulo}" se ha añadido a tu orden de compra.`);
                  }}
                  className="btn btn-primary btn-sm px-8 rounded-lg"
                >
                  ADQUIRIR
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/registro" className="text-blue-400 font-bold hover:underline tracking-widest uppercase text-xs">
            Finalizar Orden y Procesar Pago →
          </Link>
        </div>
      </div>
    </div>
  );
}