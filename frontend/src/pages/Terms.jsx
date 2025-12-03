import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Terms(){
  return (
    <div className="py-12">
      <Helmet>
        <title>Terms of Use | CDA and Partners Consulting</title>
        <meta name="description" content="Terms governing the use of this website and our services." />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-navy text-center">Terms of Use</h1>
        <div className="mt-8 max-w-3xl mx-auto space-y-4 text-slate">
          <p>Use of this site implies acceptance of these terms. Information provided is for general guidance and does not constitute professional advice.</p>
          <p>All content is the property of CDA and Partners Consulting. Unauthorized reproduction is prohibited.</p>
        </div>
      </div>
    </div>
  )
}