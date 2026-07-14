import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/login/login.jsx'
import Produit from './components/product/produit.jsx'
import DetailProduit from './components/product/detail_produit.jsx'
import Accueil from './components/accueil/accueil.jsx'
import Entrepots from './components/warehouse/entrepots.jsx'
import DetailEntrepots from './components/warehouse/detail_entrepots.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/produits" element={<Produit />} />
        <Route path="/produits.html" element={<Produit />} />
        <Route path="/detail_produits" element={<DetailProduit />} />
        <Route path="/detail_produits/:id" element={<DetailProduit />} />
        <Route path="/detail_produits.html" element={<DetailProduit />} />
        <Route path="/detail_produits.html/:id" element={<DetailProduit />} />
        <Route path="/entrepots" element={<Entrepots />} />
        <Route path="/entrepots.html" element={<Entrepots />} />
        <Route path="/entrepots/:id" element={<DetailEntrepots />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;