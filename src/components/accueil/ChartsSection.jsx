import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartsSection = () => {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    let barChartInstance;
    let pieChartInstance;

    // Diagramme en barre
    if (barChartRef.current) {
      const barCtx = barChartRef.current.getContext('2d');
      barChartInstance = new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin'],
          datasets: [{
            label: 'Volume stocké (unités)',
            data: [45, 62, 78, 85, 92, 100],
            backgroundColor: [
              'rgba(148, 163, 184, 0.6)',
              'rgba(100, 116, 139, 0.6)',
              'rgba(52, 211, 153, 0.7)',
              'rgba(52, 211, 153, 0.8)',
              'rgba(52, 211, 153, 0.9)',
              'rgba(255, 255, 255, 0.9)'
            ],
            borderColor: [
              '#94a3b8',
              '#64748b',
              '#34d399',
              '#34d399',
              '#34d399',
              '#ffffff'
            ],
            borderWidth: 2,
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(148, 163, 184, 0.1)'
              },
              ticks: {
                color: '#94a3b8'
              }
            },
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: '#94a3b8'
              }
            }
          }
        }
      });
    }

    // Diagramme circulaire
    if (pieChartRef.current) {
      const pieCtx = pieChartRef.current.getContext('2d');
      pieChartInstance = new Chart(pieCtx, {
        type: 'doughnut',
        data: {
          labels: ['Principal', 'Secondaire', 'Nord'],
          datasets: [{
            data: [42, 26, 10],
            backgroundColor: [
              '#f8fafc',
              '#34d399',
              '#64748b'
            ],
            borderColor: '#0f172a',
            borderWidth: 3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: '#94a3b8',
                padding: 15,
                usePointStyle: true,
                pointStyle: 'circle'
              }
            }
          },
          cutout: '60%'
        }
      });
    }

    return () => {
      if (barChartInstance) barChartInstance.destroy();
      if (pieChartInstance) pieChartInstance.destroy();
    };
  }, []);

  return (
    <section className="mb-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      {/* Diagramme en barre */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">Volume stocké par mois</h3>
            <p className="mt-1 text-sm text-slate-400">Volume stocké par mois sur les 6 derniers mois</p>
          </div>
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">+12%</span>
        </div>
        <div className="mt-4 h-[250px]"><canvas ref={barChartRef}></canvas></div>
      </div>

      {/* Diagramme circulaire */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">Capacité globale</h3>
            <p className="mt-1 text-sm text-slate-400">Part de capacité occupée par entrepôt</p>
          </div>
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">78%</span>
        </div>
        <div className="mt-4 flex h-[250px] justify-center"><canvas ref={pieChartRef}></canvas></div>
      </div>
    </section>
  );
};

export default ChartsSection;