import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <Helmet>
        <title>CDA and Partners Consulting - Professional Audit, Accounting & Tax Services</title>
        <meta name="description" content="Expert audit, accounting, and tax consulting services in Nigeria." />
      </Helmet>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy">Audit, Accounting & Tax Excellence</h1>
            <p className="mt-4 text-lg text-slate">Comprehensive financial advisory, statutory audit, IFRS compliance, and tax planning solutions tailored for Nigerian businesses.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="px-5 py-3 rounded-lg bg-azure text-white font-semibold hover:brightness-110" to="/contact">Book a Free Consultation</Link>
              <Link className="px-5 py-3 rounded-lg border border-deep text-deep font-semibold hover:bg-pale" to="/request-proposal">Request Proposal</Link>
            </div>
          </div>
          <div className="rounded-xl shadow-brand p-6 bg-pale">
            <img src="/cda_wordmark.svg" alt="CDA and Partners Consulting" className="w-full" />
          </div>
        </div>
      </section>
      <section className="bg-pale py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center">Core Services</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {title:'Statutory Audit',desc:'Independent, high-quality audits of financial statements as per IFRS and local regulations.'},
              {title:'Internal Audit & Risk',desc:'Improve internal controls, risk management, and governance processes.'},
              {title:'IFRS Advisory',desc:'Technical accounting advice and support for IFRS conversions.'},
            ].map(s => (
              <div key={s.title} className="bg-white rounded-xl p-6 shadow">
                <h3 className="text-xl font-semibold text-deep">{s.title}</h3>
                <p className="mt-2 text-slate">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}