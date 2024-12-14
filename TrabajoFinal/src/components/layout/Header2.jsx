import { Link, useLocation } from "react-router-dom";

export default function Header2() {
  return (
    <header className="bg-gradient-to-b from-[#4e518b] to-[#606297] shadow-lg">
      <div className="container mx-auto mt-0 px-4 py-6">
        <div className="flex items-center mx-auto justify-between">
          {/* Título del sitio */}
          <h1 className="text-2xl text-[#edeef3] hover:text-[#b8b9d1] font-bold">
            Electricity Trends
          </h1>

          {/* Navegación */}
          <nav>
            <ul className="flex space-x-6 text-xl text-[#edeef3] font-bold">
            <li className="hover:text-[#b8b9d1]">
                {/* Opción 1: Overview */}
                <Link to="/overview">
                  Overview
                </Link>
              </li>
            <li className="hover:text-[#b8b9d1]">
                {/* Opcion 0 : table */}
                <Link
                 to="/table"
                >
                Table
                </Link>
                {/* Overview */}
              </li>
              

              <li className="hover:text-[#b8b9d1]">
                {/* Opción 2: Calculator */}
                <Link to="/calculator">
                  Calculator
                </Link>
              </li>

              <li className="hover:text-[#dcdce8]">
                {/* Opción 3: Dashboard */}
                <Link to="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
