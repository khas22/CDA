import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Insights from './pages/Insights'
import Article from './pages/Article'
import About from './pages/About'
import Contact from './pages/Contact'
import RequestProposal from './pages/RequestProposal'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>CDA and Partners Consulting</title>
        <meta name="description" content="Professional audit, accounting, and tax consulting services in Nigeria." />
      </Helmet>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/5-steps-to-audit-readiness" element={<Article />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-proposal" element={<RequestProposal />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* Legacy redirects from .html */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/services.html" element={<Navigate to="/services" replace />} />
          <Route path="/industries.html" element={<Navigate to="/industries" replace />} />
          <Route path="/insights.html" element={<Navigate to="/insights" replace />} />
          <Route path="/5-steps-to-audit-readiness.html" element={<Navigate to="/5-steps-to-audit-readiness" replace />} />
          <Route path="/about.html" element={<Navigate to="/about" replace />} />
          <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
          <Route path="/request-proposal.html" element={<Navigate to="/request-proposal" replace />} />
          <Route path="/privacy.html" element={<Navigate to="/privacy" replace />} />
          <Route path="/terms.html" element={<Navigate to="/terms" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}