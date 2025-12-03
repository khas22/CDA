import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Industries(){
  const sectors = ['Banking','Oil & Gas','Manufacturing','Telecommunications','Healthcare','Government']
  return (
    <div className="py-12">
      <Helmet>
        <title>Industry Expertise | CDA and Partners Consulting</title>
        <meta name="description" content="Specialized audit, accounting, and tax services for key sectors in Nigeria." />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-navy text-center">Industry Expertise</h1>
        <p className="mt-4 text-center text-slate max-w-3xl mx-auto">Tailored, sector-specific solutions backed by practical experience.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {sectors.map(s => (
            <div key={s} className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold text-deep">{s}</h3>
              <p className="mt-2 text-slate">Audit and advisory services designed to match regulatory and operational realities.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}