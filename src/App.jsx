import { BrowserRouter } from 'react-router-dom'
import WarehouseRoutes from './components/warehouse/WarehouseRoutes.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <WarehouseRoutes />
    </BrowserRouter>
  )
}

export default App
