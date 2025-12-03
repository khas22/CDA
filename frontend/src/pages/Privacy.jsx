import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Privacy(){
  return (
    <div className="py-12">
      <Helmet>
        <title>Privacy Policy | CDA and Partners Consulting</title>
        <meta name="description" content="Our commitment to protecting your privacy and handling data responsibly." />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-navy text-center">Privacy Policy</h1>
        <div className="mt-8 max-w-3xl mx-auto space-y-4 text-slate">
          <p>We respect your privacy and are committed to protecting your personal data. This policy outlines what information we collect and how we use it.</p>
          <p>We do not sell personal data and only process information necessary for service delivery and compliance.</p>
        </div>
      </div>
    </div>
  )
}