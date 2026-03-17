import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DemoPage from './pages/DemoPage'
import HowItWorksPage from './pages/HowItWorksPage'
import CaregiverPage from './pages/CaregiverPage'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/demo" element={<DemoPage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/caregiver" element={<CaregiverPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
