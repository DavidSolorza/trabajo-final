import React, { useState } from 'react';
import { Calculator, Zap } from 'lucide-react';
import { calculateRenewableShare } from '../../services/energyData';

export function EnergyCalculator() {
  const [consumption, setConsumption] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const totalKwh = parseFloat(consumption);
    if (!isNaN(totalKwh)) {
      setResult(calculateRenewableShare(totalKwh));
    }
  };

  return (
    <section className="py-16 bg-[#edeef3]" id="calculator">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#ffffff] rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="h-8 w-8 text-[#4e518b]" />
              <h2 className="text-3xl font-bold text-[#606297]">Calculadora de energía</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="consumption" className="block text-sm font-medium text-[#7174a2] mb-2">
                  Monthly Electricity Consumption (kWh)
                </label>
                <input
                  type="number"
                  id="consumption"
                  value={consumption}
                  onChange={(e) => setConsumption(e.target.value)}
                  className="w-full px-4 py-2 border border-[#8385ae] rounded-lg focus:ring-2 focus:ring-[#4e518b] focus:border-transparent"
                  placeholder="Enter your monthly consumption"
                />
              </div>

              <button
                onClick={handleCalculate}
                className="w-full bg-[#4e518b] text-white py-3 rounded-lg hover:bg-[#7174a2] transition-colors flex items-center justify-center gap-2"
              >
                <Zap className="h-5 w-5" />
                Calculate Renewable Share
              </button>

              {result !== null && (
                <div className="mt-6 p-4 bg-[#cacbdc] rounded-lg">
                  <h3 className="text-lg font-semibold text-[#4e518b] mb-2">Results</h3>
                  <p className="text-[#606297]">
                    Estimated renewable energy contribution:{' '}
                    <span className="font-bold text-[#4e518b]">{result.toFixed(2)} kWh</span>
                  </p>
                  <p className="text-sm text-[#8385ae] mt-2">
                    Based on current global renewable energy production data.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
