"use client";

import { useAccount } from "wagmi";
import { useState, useEffect } from "react";

export default function RegistroPage() {
  const { address } = useAccount();
  const [mounted, setMounted] = useState(false);
  const [enviando, setEnviando] = useState(false);
  
  // Nuevos campos solicitados
  const [curso, setCurso] = useState("");
  const [turno, setTurno] = useState("");
  const [modalidad, setModalidad] = useState("");

  useEffect(() => { setMounted(true); }, []);

  const enviarRegistro = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address || !curso || !turno || !modalidad) return alert("⚠️ Por favor completa todos los campos.");

    setEnviando(true);
    const TOKEN_FORMSUBMIT = "bf1704f4e8e9bfb4be77ade18906e4ac"; // Tu token verificado

    try {
      await fetch(`https://formsubmit.co/ajax/${TOKEN_FORMSUBMIT}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "Wallet": address,
          "Curso Seleccionado": curso,
          "Turno": turno,
          "Modalidad": modalidad,
          "_subject": `NUEVO REGISTRO: ${curso}`
        }),
      });
      alert("✅ ¡REGISTRO COMPLETO! Datos enviados a Control de Estudios.");
      setCurso(""); setTurno(""); setModalidad("");
    } catch (error) {
      alert("❌ Error de envío.");
    } finally {
      setEnviando(false);
    }
  };

  if (!mounted) return null; // Evita error de Hydration

  return (
    <div className="max-w-md mx-auto p-10 bg-slate-900 border-2 border-blue-500 rounded-3xl my-10 shadow-2xl text-white font-sans">
      <h2 className="text-center text-blue-400 font-black text-xl mb-6 uppercase">Planilla de Inscripción</h2>
      
      <form onSubmit={enviarRegistro} className="space-y-4">
        {/* Wallet Auto-detectada */}
        <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
          <p className="text-[9px] text-blue-300 uppercase font-bold">Wallet Estudiante</p>
          <p className="text-[10px] font-mono truncate">{address || "CONECTE WALLET"}</p>
        </div>

        {/* Input para el Curso */}
        <input 
          type="text" placeholder="Nombre del Curso (Pégalo aquí)" 
          className="input input-bordered w-full bg-slate-800"
          value={curso} onChange={(e) => setCurso(e.target.value)} required
        />

        {/* Selector de Turno */}
        <select className="select select-bordered w-full bg-slate-800" value={turno} onChange={(e) => setTurno(e.target.value)} required>
          <option value="" disabled>Seleccione Turno</option>
          <option value="Mañana">Mañana</option>
          <option value="Tarde">Tarde</option>
          <option value="Noche">Noche</option>
        </select>

        {/* Selector de Modalidad */}
        <select className="select select-bordered w-full bg-slate-800" value={modalidad} onChange={(e) => setModalidad(e.target.value)} required>
          <option value="" disabled>Seleccione Modalidad</option>
          <option value="Presencial">Presencial</option>
          <option value="Virtual">Virtual</option>
        </select>

        <button type="submit" disabled={enviando} className="btn btn-primary w-full font-black shadow-lg">
          {enviando ? "PROCESANDO..." : "ENVIAR REGISTRO FINAL"}
        </button>
      </form>
    </div>
  );
}