import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import Demo from './pages/Demo'
import ContactPage from './pages/Contact'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/careers" element={<ContactPage />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

