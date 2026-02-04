"use client";

import Link from "next/link";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

export default function MenusPage() {
  const { address } = useAccount();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-slate-900 p-6 text-white font-sans">
      
      {/* SECCIÓN PRINCIPAL */}
      <div className="flex-grow flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-black mb-12 uppercase text-blue-400 tracking-tighter text-center italic">
          SISTEMA ACADÉMICO UPTA
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* BOTÓN 1: OFERTA ACADÉMICA */}
          <Link 
            href="/cursos" 
            className="group bg-slate-800 hover:bg-green-600 border-2 border-green-500 p-8 rounded-3xl transition-all flex flex-col items-center text-center shadow-lg hover:scale-105"
          >
            <span className="text-4xl mb-2">📚</span>
            <span className="text-xl font-bold uppercase">Oferta Académica</span>
            <p className="text-[10px] opacity-60">Mira los cursos y copia el turno</p>
          </Link>

          {/* BOTÓN 2: PLANILLA DE REGISTRO */}
          <Link 
            href="/registro" 
            className="group bg-slate-800 hover:bg-blue-600 border-2 border-blue-500 p-8 rounded-3xl transition-all flex flex-col items-center text-center shadow-lg hover:scale-105"
          >
            <span className="text-4xl mb-2">📋</span>
            <span className="text-xl font-bold uppercase">Planilla de Registro</span>
            <p className="text-[10px] opacity-60">Inscripción oficial vía Blockchain</p>
          </Link>

          {/* BOTÓN 3: PRÓXIMAMENTE COMPRA $UPTA */}
          <div 
            className="group bg-slate-800 border-2 border-yellow-500/50 p-8 rounded-3xl flex flex-col items-center text-center opacity-80 cursor-not-allowed md:col-span-2 shadow-[0_0_15px_rgba(234,179,8,0.1)]"
          >
            <span className="text-4xl mb-2 text-yellow-500">🪙</span>
            <span className="text-xl font-bold uppercase text-yellow-500">Próximamente: Compra de $UPTA</span>
            <p className="text-[10px] text-yellow-200/60">Token nativo del instituto - Gestión de pagos</p>
          </div>
        </div>

        {/* Estado de la Wallet */}
        <div className="mt-12 p-4 bg-slate-800 rounded-2xl border border-slate-700 flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${address ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
          <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
            {address ? `Wallet: ${address.substring(0, 6)}...` : "Desconectado"}
          </span>
        </div>
      </div>

      {/* PIE DE PÁGINA ACTUALIZADO */}
      <footer className="w-full text-center py-6 mt-8 border-t border-slate-800 space-y-1">
        <p className="text-slate-500 text-xs font-medium tracking-widest uppercase">
          Realizado por: <span className="text-blue-400 font-bold">Jimmy Noriega</span>
        </p>
        <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
          UPT Aragua — <span className="text-slate-400 italic">Sede La Victoria</span>
        </p>
      </footer>

    </div>
  );
}