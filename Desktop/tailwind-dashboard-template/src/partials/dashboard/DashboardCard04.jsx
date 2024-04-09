import React from 'react';
import BarChart from '../../charts/BarChart01';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard04() {
  const chartData = {
    labels: [
      '1-01-2024', '02-01-2024', '03-01-2024',
      '04-01-2024', '05-01-2024', '06-01-2024',
      '07-01-2024', '08-01-2024', '09-01-2024',
      '10-01-2024', '11-01-2024', '12-01-2024',
    ],
    datasets: [
      // Light blue bars
      {
        label: 'Réussis',
        data: [
          800, 1600, 900, 1300, 1950, 1700,
          4900, 2600, 5350, 4800, 5200, 4800,
        ],
        backgroundColor: tailwindConfig().theme.colors.blue[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: 'A revoir',
        data: [
          0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-center text-warning dark:text-slate-100">Projets Javascript réussis</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard04;
