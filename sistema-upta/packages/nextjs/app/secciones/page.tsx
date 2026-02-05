"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PanelSecciones() {
  // Las 5 carreras exactas que solicitaste
  const carreras = [
    { id: 1, nombre: "Mecánica", path: "/libreria/mecanica", color: "bg-orange-600", icon: "⚙️" },
    { id: 2, nombre: "Electricidad", path: "/libreria/electricidad", color: "bg-yellow-500", icon: "⚡" },
    { id: 3, nombre: "Informática", path: "/libreria/informatica", color: "bg-blue-600", icon: "💻" },
    { id: 4, nombre: "Instrumentación Industrial", path: "/libreria/instrumentacion", color: "bg-green-600", icon: "🌡️" },
    { id: 5, nombre: "Electrónica", path: "/libreria/electronica", color: "bg-purple-600", icon: "📟" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center py-10 px-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
          Librería Virtual - Postgrado
        </h1>
        <p className="text-blue-400 font-bold mt-2 uppercase tracking-widest text-sm">
          Seleccione su Área de Especialización
        </p>
      </header>

      {/* CONTENEDOR DE BOTONES POR CARRERA */}
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        {carreras.map((carrera) => (
          <Link key={carrera.id} href={carrera.path} className="w-full">
            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              whileTap={{ scale: 0.98 }}
              className={`${carrera.color} p-6 rounded-2xl shadow-2xl flex items-center justify-between border-b-4 border-black/30 cursor-pointer group transition-all`}
            >
              <div className="flex items-center gap-6">
                <span className="text-4xl group-hover:rotate-12 transition-transform">
                  {carrera.icon}
                </span>
                <span className="text-2xl font-black text-white uppercase italic">
                  {carrera.nombre}
                </span>
              </div>
              <div className="bg-white/20 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <footer className="mt-auto pt-10 text-center">
        <p className="text-slate-500 text-[10px] uppercase tracking-[0.5em]">
          Desarrollado por: <span className="text-white font-bold">Abraham Romero</span>
        </p>
        <p className="text-slate-600 text-[9px] font-bold mt-1">UPT ARAGUA - SEDE LA VICTORIA</p>
      </footer>
    </div>
  );
}