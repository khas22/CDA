import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Services(){
  return (
    <div className="py-12">
      <Helmet>
        <title>Professional Audit & Accounting Services | CDA and Partners Consulting</title>
        <meta name="description" content="Comprehensive audit, accounting, and tax services including statutory audit, IFRS advisory, internal audit, and tax consulting." />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-navy text-center">Our Professional Services</h1>
        <p className="mt-4 text-center text-slate max-w-3xl mx-auto">Delivering comprehensive audit, accounting, and advisory solutions to drive your business forward.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {title:'Statutory Audit', items:['Financial Statement Audits','Regulatory Compliance Audits','Agreed-Upon Procedures']},
            {title:'Internal Audit & Risk', items:['Risk-Based Internal Audits','Internal Control Reviews','Corporate Governance Advisory']},
            {title:'IFRS Advisory', items:['IFRS Conversion & Implementation','Complex Accounting Matters','Financial Reporting Support']},
            {title:'Accounting Services', items:['Bookkeeping & Payroll','Management Accounts','Financial Statement Preparation']},
            {title:'Tax Consulting', items:['Tax Planning & Advisory','Compliance & Filing','Transfer Pricing']},
            {title:'Transaction Advisory', items:['Due Diligence','Valuation Support','Deal Structuring']},
          ].map(s => (
            <div key={s.title} className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold text-deep">{s.title}</h3>
              <ul className="mt-3 list-disc list-inside text-slate">
                {s.items.map(it => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}