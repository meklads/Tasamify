import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './index.css'

import { LanguageProvider } from './lib/LanguageContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import GroupSchema from './components/GroupSchema'
import Home from './pages/Home'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = hash === '#brands' ? '#companies' : hash
      const el = document.querySelector(target)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

function Layout() {
  return (
    <>
      <ScrollManager />
      <GroupSchema />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Navigate to="/#companies" replace />} />
          <Route path="/brands" element={<Navigate to="/#companies" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </LanguageProvider>
  )
}
