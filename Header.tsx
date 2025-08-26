export default function Header() {
  return (
    <header className="bg-blue-600 text-white px-6 py-3 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-semibold">Portal Hospitalario</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="/dashboard" className="hover:underline">Inicio</a></li>
          <li><a href="/dashboard/appointments" className="hover:underline">Turnos</a></li>
          <li><a href="/login" className="hover:underline">Salir</a></li>
        </ul>
      </nav>
    </header>
  );
}
