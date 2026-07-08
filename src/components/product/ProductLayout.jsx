import Sidebar from './Sidebar.jsx'

function ProductLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar
        subtitle="Tableau de bord logistique"
        links={[
          { label: 'Produits', to: '/produits.html', active: true, internal: true },
          { label: 'Entrepôts', to: '/entrepots.html', active: false, internal: false },
          { label: 'Rapports', to: '#', active: false, internal: false },
          { label: 'Paramètres', to: '#', active: false, internal: false },
        ]}
      />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
    </div>
  )
}

export default ProductLayout
