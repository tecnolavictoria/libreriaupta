"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useAccount } from "wagmi";
import { motion } from "framer-motion";

const DATA_LIBRERIA: any = {
  informatica: {
    titulo: "Informática",
    color: "border-blue-500",
    secciones: [
      { tipo: "📚 Libros Comerciales", items: [{n: "Clean Code", p: "45"}, {n: "The Pragmatic Programmer", p: "42"}] },
      { tipo: "🎓 Libros de Doctorado", items: [{n: "Algoritmos Evolutivos", p: "130"}, {n: "Seguridad SDN", p: "125"}] },
      { tipo: "📜 Libros de Maestría", items: [{n: "Bases de Datos NoSQL", p: "75"}, {n: "Microservicios", p: "85"}] },
      { tipo: "🛠️ Libros de Especialización", items: [{n: "Ciberseguridad Crítica", p: "65"}, {n: "React/Next.js", p: "50"}] },
      { tipo: "🔬 Artículos Científicos", items: [{n: "Blockchain Trazabilidad", p: "30"}, {n: "Análisis Redes 5G", p: "25"}] }
    ]
  },
  mecanica: {
    titulo: "Mecánica",
    color: "border-orange-500",
    secciones: [
      { tipo: "📚 Libros Comerciales", items: [{n: "Termodinámica (Çengel)", p: "35"}, {n: "Diseño de Máquinas", p: "40"}] },
      { tipo: "🎓 Libros de Doctorado", items: [{n: "Fractura Aeroespacial", p: "100"}, {n: "Simulación Turbinas", p: "120"}] },
      { tipo: "📜 Libros de Maestría", items: [{n: "Elementos Finitos", p: "75"}, {n: "Mantenimiento 4.0", p: "60"}] },
      { tipo: "🛠️ Libros de Especialización", items: [{n: "Soldadura Avanzada", p: "45"}, {n: "Refrigeración Industrial", p: "50"}] },
      { tipo: "🔬 Artículos Científicos", items: [{n: "Optimización de Arrastre", p: "20"}, {n: "Estudio Térmico", p: "25"}] }
    ]
  },
  electricidad: {
    titulo: "Electricidad",
    color: "border-yellow-500",
    secciones: [
      { tipo: "📚 Libros Comerciales", items: [{n: "Sistemas de Potencia", p: "40"}, {n: "Máquinas Eléctricas", p: "38"}] },
      { tipo: "🎓 Libros de Doctorado", items: [{n: "Estabilidad Transitoria", p: "110"}, {n: "Control Redes HVDC", p: "115"}] },
      { tipo: "📜 Libros de Maestría", items: [{n: "Energías Renovables", p: "80"}, {n: "Protecciones Digitales", p: "70"}] },
      { tipo: "🛠️ Libros de Especialización", items: [{n: "Subestaciones", p: "55"}, {n: "Eficiencia Energética", p: "45"}] },
      { tipo: "🔬 Artículos Científicos", items: [{n: "Impacto Vehículos Eléctricos", p: "22"}, {n: "Micro-Grids", p: "28"}] }
    ]
  },
  instrumentacion: {
    titulo: "Instrumentación",
    color: "border-green-600",
    secciones: [
      { tipo: "📚 Libros Comerciales", items: [{n: "Control Moderna (Ogata)", p: "50"}, {n: "Instrumentación Industrial", p: "48"}] },
      { tipo: "🎓 Libros de Doctorado", items: [{n: "Control Predictivo MPC", p: "140"}, {n: "Lógica Borrosa", p: "135"}] },
      { tipo: "📜 Libros de Maestría", items: [{n: "Redes Profibus", p: "90"}, {n: "SCADA y HMI", p: "85"}] },
      { tipo: "🛠️ Libros de Especialización", items: [{n: "Configuración PLC", p: "70"}, {n: "Metrología y Calibración", p: "60"}] },
      { tipo: "🔬 Artículos Científicos", items: [{n: "Automatización de Aguas", p: "35"}, {n: "Seguridad SIL", p: "40"}] }
    ]
  },
  electronica: {
    titulo: "Electrónica",
    color: "border-purple-600",
    secciones: [
      { tipo: "📚 Libros Comerciales", items: [{n: "Principios de Electrónica", p: "35"}, {n: "Sistemas de Comunicación", p: "40"}] },
      { tipo: "🎓 Libros de Doctorado", items: [{n: "Señales Biomédicas", p: "110"}, {n: "Circuitos RFIC", p: "120"}] },
      { tipo: "📜 Libros de Maestría", items: [{n: "Sistemas ARM", p: "80"}, {n: "Internet de las Cosas", p: "95"}] },
      { tipo: "🛠️ Libros de Especialización", items: [{n: "Fuentes Conmutadas", p: "55"}, {n: "Programación Micros", p: "60"}] },
      { tipo: "🔬 Artículos Científicos", items: [{n: "Nanotecnología", p: "30"}, {n: "Redes WSN", p: "25"}] }
    ]
  }
};

export default function PaginaCarrera() {
  const params = useParams();
  const { address, isConnected } = useAccount();
  const carreraKey = params.carrera as string;
  const contenido = DATA_LIBRERIA[carreraKey];

  const handleCompra = async (item: any) => {
    if (!isConnected) {
      alert("⚠️ ERROR: DEBES CONECTAR TU METAMASK");
      return;
    }

    const datosCompra = {
      wallet: address,
      libro: item.n,
      precio: `${item.p} $UPTA`,
      fecha: new Date().toLocaleString(),
    };

    try {
      // PROCESO DE ENVÍO INVISIBLE AL BACKEND
      const response = await fetch("/api/send-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosCompra),
      });

      if (response.ok) {
        alert(`✅ ¡COMPRA EXITOSA!\n\nLibro: ${item.n}\nEl reporte ha sido enviado automáticamente a la coordinación de Postgrado.`);
      } else {
        throw new Error("Fallo en el servidor");
      }
    } catch (err) {
      console.error("Error en el envío:", err);
      alert("❌ ERROR DE SERVIDOR: No se pudo enviar el reporte por correo.");
    }
  };

  if (!contenido) return <div className="p-20 text-white text-center font-bold">CARRERA NO ENCONTRADA</div>;

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-12 text-slate-100 uppercase font-bold">
      <div className="flex justify-between items-center mb-10">
        <Link href="/secciones" className="btn btn-outline btn-xs border-slate-800 text-slate-500">← VOLVER</Link>
        <div className="text-[10px] text-blue-400 font-mono bg-blue-500/5 px-4 py-2 rounded-lg border border-blue-500/20">
          {isConnected ? `ID WALLET: ${address?.substring(0, 10)}...` : "ESPERANDO CONEXIÓN"}
        </div>
      </div>

      <header className="mb-16">
        <h1 className={`text-4xl md:text-5xl border-l-8 pl-6 ${contenido.color}`}>
          {contenido.titulo}
          <span className="text-xs block text-slate-600 mt-2 font-light tracking-widest font-sans uppercase">Bibliografía Digital de Postgrado</span>
        </h1>
      </header>

      <div className="space-y-16">
        {contenido.secciones.map((sec: any, idx: number) => (
          <section key={idx}>
            <h2 className="text-[10px] mb-8 text-blue-500 tracking-[0.4em] bg-blue-500/10 w-fit px-4 py-1 rounded-full">{sec.tipo}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {sec.items.map((item: any, i: number) => (
                <motion.div 
                  whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.4)" }}
                  key={i} 
                  className="bg-slate-900/30 p-6 rounded-2xl flex justify-between items-center border border-slate-900 backdrop-blur-sm"
                >
                  <div className="flex flex-col">
                    <span className="text-sm md:text-md">{item.n}</span>
                    <span className="text-[8px] text-slate-500 mt-2 font-mono tracking-tighter">DISPONIBILIDAD INMEDIATA</span>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <span className="text-2xl font-black text-green-400 font-mono tracking-tighter">
                      {item.p} <span className="text-xs text-green-700 font-sans ml-1">$UPTA</span>
                    </span>
                    <button 
                      onClick={() => handleCompra(item)} 
                      className="btn btn-primary btn-sm px-8 rounded-lg font-black hover:shadow-blue-500/40 transition-all shadow-md"
                    >
                      COMPRAR
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-32 text-center text-[10px] opacity-20 tracking-[1em] pb-10">
        UPT ARAGUA • SEDE LA VICTORIA
      </footer>
    </div>
  );
}