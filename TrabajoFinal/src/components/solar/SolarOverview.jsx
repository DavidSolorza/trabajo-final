import React from "react";
import { Sun, Leaf, DollarSign } from "lucide-react";

export function SolarOverview() {
  return (
    <section className="py-16 bg-[#edeef3]">
      <div className="container mx-auto px-4">
        
        <h1 className="text-4xl font-bold text-[#4e518b] mb-8 text-center">
          Solar Energy: Powering a Sustainable Future
        </h1>

        <p className="text-[#4e518b] mb-8">
          Las energías renovables provienen de fuentes naturales que se reponen
          más rápido de lo que se consumen, como la luz solar, el viento, el agua
          y la biomasa. A diferencia de los combustibles fósiles, que tardan
          millones de años en formarse y generan altas emisiones de gases de
          efecto invernadero, las renovables producen menos contaminación y son
          clave para combatir el cambio climático. Además, son más económicas y
          generan más empleos.
        </p>        

        <h2 className="text-2xl font-bold text-[#4e518b] mb-6 text-center">
          Renewable Energy Sources
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Energía Solar",
              description:
                "Generada por paneles fotovoltaicos o sistemas de concentración solar. Es la fuente más abundante, accesible incluso con cielos nublados, y una de las más baratas de producir.",
            },
            {
              title: "Energía Eólica",
              description:
                "Aprovecha la energía del viento mediante turbinas en tierra o mar. Tiene un gran potencial técnico para satisfacer la demanda energética global.",
            },
            {
              title: "Energía Geotérmica",
              description:
                "Utiliza el calor del interior de la Tierra para generar electricidad o calefacción. Es una tecnología madura y confiable con más de 100 años de uso.",
            },
            {
              title: "Energía Hidroeléctrica",
              description:
                "Generada por el movimiento del agua, ya sea en embalses o ríos. Es la mayor fuente de energía renovable eléctrica, aunque su infraestructura puede alterar ecosistemas.",
            },
            {
              title: "Bioenergía",
              description:
                "Proviene de la biomasa (madera, residuos agrícolas, cultivos). Su quema emite menos gases que los combustibles fósiles, aunque debe usarse con precaución para evitar deforestación y daños ambientales.",
            },
          ].map(({ title, description }) => (
            <div
              key={title}
              className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#4e518b] text-center">
                {title}
              </h3>
              <p className="text-[#4e518b]">{description}</p>
            </div>
          ))}
        </div>

        <br />
        <br />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl shadow-md">
            <Sun className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-[#4e518b]">
              How It Works
            </h3>
            <p className="text-[#4e518b]">
              Las energías renovables transforman recursos naturales como el
              sol, viento, agua y biomasa en electricidad o calor mediante
              tecnologías limpias como paneles solares, aerogeneradores y
              turbinas hidroeléctricas.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md">
            <Leaf className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-[#4e518b]">
              Environmental Impact
            </h3>
            <p className="text-[#4e518b]">
              Producen energía con bajas emisiones de gases contaminantes,
              mitigando el cambio climático y mejorando la calidad del aire,
              aunque requieren una gestión sostenible de sus materiales.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
            <DollarSign className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-[#4e518b]">
              Economic Benefits
            </h3>
            <p className="text-[#4e518b]">
              Impulsan empleos, reducen costos a largo plazo y disminuyen la
              dependencia de combustibles fósiles, promoviendo economías más
              sostenibles y diversificadas.
            </p>
          </div>
        </div>

        <div className="bg-[#edeef3] rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-[#4e518b]">
            Key Statistics
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-yellow-500">1,000+ GW</p>
              <p className="text-[#4e518b]">Global Solar Capacity</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-yellow-500">3%</p>
              <p className="text-[#4e518b]">Global Electricity Share</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-yellow-500">70%</p>
              <p className="text-[#4e518b]">Cost Reduction Since 2010</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-yellow-500">25+ Years</p>
              <p className="text-[#4e518b]">Average Panel Lifespan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}