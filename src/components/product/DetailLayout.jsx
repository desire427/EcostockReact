import Sidebar from './Sidebar.jsx'

function DetailLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar
        subtitle="Détail produit"
        links={[
          { label: 'Produits', to: '/produits.html', active: false, internal: true },
          { label: 'Entrepôts', to: '/entrepots.html', active: false, internal: false },
        ]}
      />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
    </div>
  )
}

export default DetailLayout
