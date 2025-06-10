'use client';
import { useState } from "react";
import { format } from "date-fns";

const services = [
  "Sesión de tarot",
  "Sesión de reiki",
  "Masaje en espalda",
  "Masaje cuerpo completo",
  "Depilación láser",
  "Constelación a distancia",
  "Eliminación de tatuajes",
  "Eliminación de tiña ungueal",
  "Curso de masajes",
  "Curso de tarot",
  "Curso de depilación láser",
  "Curso de eliminación de tatuajes",
  "Curso de reiki",
  "Curso de flores de Bach"
];

export default function AgendaTurnos() {
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [name, setName] = useState("");
  const [service, setService] = useState(services[0]);
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    const message = \`Hola! Soy \${name}. Me gustaría agendar un turno para el servicio: \${service} el día \${date} a las 08:00 hs.\n\nNota: \${note}\`;
    const url = \`https://wa.me/5492804180367?text=\${encodeURIComponent(message)}\`;
    window.open(url, "_blank");
  };

  return (
    <main className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">Agenda tu turno online</h1>
      <p className="text-center text-sm text-gray-500">Puerto Madryn, Chubut, Argentina</p>
      <div className="space-y-4">
        <input type="text" placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded-xl" />
        <select value={service} onChange={(e) => setService(e.target.value)} className="w-full p-2 border rounded-xl">
          {services.map((s) => <option key={s}>{s}</option>)}
        </select>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 border rounded-xl" />
        <textarea placeholder="Nota adicional (opcional)" value={note} onChange={(e) => setNote(e.target.value)} className="w-full p-2 border rounded-xl" />
        <button onClick={handleSubmit} className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded-xl">Reservar por WhatsApp</button>
      </div>
    </main>
  );
}
