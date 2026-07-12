import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PALETTE = [
  '#f8fafc', '#34d399', '#64748b', '#818cf8', '#fb923c', '#f472b6', '#38bdf8',
];

const ChartsSection = ({ products = [], warehouses = [], loading = false }) => {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const barInstance = useRef(null);
  const pieInstance = useRef(null);

  useEffect(() => {
    // On attend que les données soient chargées ET que les canvas soient montés
    if (loading || !barChartRef.current || !pieChartRef.current) return;

    // Détruire les instances précédentes avant d'en créer de nouvelles
    if (barInstance.current) {
      barInstance.current.destroy();
      barInstance.current = null;
    }
    if (pieInstance.current) {
      pieInstance.current.destroy();
      pieInstance.current = null;
    }

    // ── Bar chart : quantité totale par entrepôt ──
    const barLabels = warehouses.map((w) => w.name);
    const barData = warehouses.map((w) =>
      products
        .filter((p) => p.warehouse === w.id)
        .reduce((sum, p) => sum + p.quantity, 0)
    );

    barInstance.current = new Chart(barChartRef.current.getContext('2d'), {
      type: 'bar',
      data: {
        labels: barLabels.length > 0 ? barLabels : ['—'],
        datasets: [{
          label: 'Quantité totale (unités)',
          data: barData.length > 0 ? barData : [0],
          backgroundColor: PALETTE.map((c) => c + '99'),
          borderColor: PALETTE,
          borderWidth: 2,
          borderRadius: 6,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(148, 163, 184, 0.1)' },
            ticks: { color: '#94a3b8' },
          },
          x: {
            grid: { display: false },
            ticks: { color: '#94a3b8' },
          },
        },
      },
    });

    // ── Donut : nombre de produits par entrepôt ──
    const pieLabels = warehouses.map((w) => w.name);
    const pieData = warehouses.map((w) =>
      products.filter((p) => p.warehouse === w.id).length
    );
    const pieColors = warehouses.map((_, i) => PALETTE[i % PALETTE.length]);
    const hasData = pieData.some((v) => v > 0);

    pieInstance.current = new Chart(pieChartRef.current.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: pieLabels.length > 0 ? pieLabels : ['Aucun entrepôt'],
        datasets: [{
          data: hasData ? pieData : [1],
          backgroundColor: pieColors.length > 0 ? pieColors : ['#64748b'],
          borderColor: '#0f172a',
          borderWidth: 3,
        }],
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
              pointStyle: 'circle',
            },
          },
        },
        cutout: '60%',
      },
    });

    return () => {
      if (barInstance.current) { barInstance.current.destroy(); barInstance.current = null; }
      if (pieInstance.current) { pieInstance.current.destroy(); pieInstance.current = null; }
    };
  }, [products, warehouses, loading]);

  return (
    <section className="mb-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      {/* Bar chart */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">Stock par entrepôt</h3>
            <p className="mt-1 text-sm text-slate-400">Quantité totale de produits par site de stockage</p>
          </div>
        </div>
        <div className="mt-4 h-[250px] relative">
          {loading && (
            <p className="absolute inset-0 flex items-center justify-center text-sm text-slate-400">
              Chargement…
            </p>
          )}
          <canvas ref={barChartRef} style={{ display: loading ? 'none' : 'block' }}></canvas>
        </div>
      </div>

      {/* Donut chart */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">Répartition des produits</h3>
            <p className="mt-1 text-sm text-slate-400">Nombre de produits par entrepôt</p>
          </div>
        </div>
        <div className="mt-4 flex h-[250px] justify-center relative">
          {loading && (
            <p className="absolute inset-0 flex items-center justify-center text-sm text-slate-400">
              Chargement…
            </p>
          )}
          <canvas ref={pieChartRef} style={{ display: loading ? 'none' : 'block' }}></canvas>
        </div>
      </div>
    </section>
  );
};

export default ChartsSection;
