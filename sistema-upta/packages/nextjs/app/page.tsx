"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LibreriaVirtual() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-base-100 p-6 text-white">
      {/* Sección Central */}
      <div className="flex-grow flex flex-col items-center justify-center text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          {/* Logo UPTA */}
          <div className="flex justify-center mb-6">
            <Image 
              src="/logo-upta.png" 
              alt="Logo UPTA" 
              width={160} 
              height={160} 
              priority 
              className="drop-shadow-2xl"
            />
          </div>

          <h1 className="text-4xl font-black text-primary uppercase tracking-tighter">
            Librería Virtual - Postgrado
          </h1>
          <p className="text-xl italic font-light mt-2 opacity-90">
            Repositorio de Propiedad Intelectual y Literatura Científica
          </p>
        </motion.div>

        {/* Botones de Acción */}
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <Link 
            href="/secciones" 
            className="btn btn-primary btn-lg rounded-full shadow-lg hover:scale-105 transition-transform font-bold"
          >
            Explorar Catálogo
          </Link>
          
          <Link 
            href="/registro" 
            className="btn btn-outline btn-accent rounded-full hover:scale-105 transition-transform"
          >
            Ir al Registro
          </Link>

          <div className="badge badge-outline badge-accent py-4 font-bold mt-2">
            PAGOS SEGUROS CON $UPTA TOKEN
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-6 border-t border-base-300">
        <p className="text-xs uppercase tracking-[0.4em] opacity-60">
          Realizado por: <span className="text-primary font-bold">Abraham Romero</span>
        </p>
        <p className="text-[10px] font-bold mt-1 opacity-50">UPT ARAGUA — SEDE LA VICTORIA</p>
      </footer>
    </div>
  );
}