import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function About(){
  return (
    <div className="py-12">
      <Helmet>
        <title>About CDA and Partners Consulting</title>
        <meta name="description" content="Learn about our mission, leadership, and commitment to audit quality and client service." />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-navy text-center">About Us</h1>
        <div className="mt-8 max-w-3xl mx-auto space-y-4 text-slate">
          <p>CDA and Partners Consulting delivers rigorous audit, clear financial reporting, and proactive tax advisory. We combine deep technical expertise with practical insight to help businesses thrive.</p>
          <p>Our leadership team brings experience across sectors, emphasizing integrity, quality, and client partnership.</p>
        </div>
      </div>
    </div>
  )
}