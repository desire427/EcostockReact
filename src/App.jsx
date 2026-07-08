import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Produit from './components/product/produit.jsx'
import DetailProduit from './components/product/detail_produit.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Produit />} />
        <Route path="/produits.html" element={<Produit />} />
        <Route path="/detail_produits.html" element={<DetailProduit />} />
        <Route path="*" element={<Produit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;