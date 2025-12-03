import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Insights(){
  const posts = [
    {title:'5 Steps to Audit Readiness', href:'/5-steps-to-audit-readiness'},
    {title:'IFRS 16: Practical Implementation Guide', href:'#'},
    {title:'Internal Controls: Building Resilience', href:'#'},
  ]
  return (
    <div className="py-12">
      <Helmet>
        <title>Insights & Resources | CDA and Partners Consulting</title>
        <meta name="description" content="Articles and guides on audit, financial reporting, tax, and governance." />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-navy text-center">Insights</h1>
        <p className="mt-4 text-center text-slate max-w-3xl mx-auto">Practical perspectives to help leaders make confident decisions.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <a key={p.title} href={p.href} className="block bg-white rounded-xl p-6 shadow hover:shadow-brand">
              <h3 className="text-xl font-semibold text-deep">{p.title}</h3>
              <p className="mt-2 text-slate">Read article →</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}