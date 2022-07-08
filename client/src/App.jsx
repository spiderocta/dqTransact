import { Navbar, Welcome, Footer, Services, Transactions } from './components'

// Router
import { Routes, Route } from "react-router";
const App = () => {

  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Routes>
             <Route path="/" element={<Welcome />} />
             <Route path="transactions" element={<Transactions />} />
             <Route path="services" element={<Services />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
