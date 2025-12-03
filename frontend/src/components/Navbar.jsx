import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo/cda_logo_monogram.svg'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="brand-gradient text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Link to="/" className="flex items-center gap-3" aria-label="CDA and Partners Consulting - Home">
            <img src={Logo} alt="CDA Logo" className="w-8 h-8 md:w-10 md:h-10 shrink-0" />
            <div>
              <p className="font-extrabold text-lg leading-tight">CDA and Partners</p>
              <p className="text-azure text-sm">Audit • Accounting • Tax</p>
            </div>
          </Link>
          <button
            className="md:hidden text-2xl px-2 rounded hover:bg-white/10"
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(v => !v)}
          >
            ☰
          </button>
          <nav id="main-navigation" className={`w-full md:w-auto ${open ? 'block' : 'hidden'} md:block`} aria-label="Primary navigation">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              {[
                ['Services','/services'],
                ['Industries','/industries'],
                ['Insights','/insights'],
                ['About','/about'],
                ['Contact','/contact'],
              ].map(([label,href]) => (
                <NavLink key={href} to={href} className={({isActive}) =>
                  `px-3 py-2 rounded-md font-medium ${isActive ? 'bg-white/20 text-white' : 'text-white hover:bg-white/10'}`
                }>{label}</NavLink>
              ))}
              <NavLink to="/request-proposal" className="px-4 py-2 rounded-lg font-bold bg-azure text-white hover:brightness-110">
                Request Proposal
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}