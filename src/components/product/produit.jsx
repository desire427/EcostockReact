import ProductLayout from './ProductLayout.jsx'
import ProductHeader from './ProductHeader.jsx'
import ProductStats from './ProductStats.jsx'
import ProductCatalog from './ProductCatalog.jsx'

function Produit() {
  return (
    <ProductLayout>
      <ProductHeader />
      <ProductStats />
      <section className="grid gap-6 xl:grid-cols-3">
        <ProductCatalog />
      </section>
    </ProductLayout>
  )
}

export default Produit;
