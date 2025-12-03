import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Article(){
  return (
    <article className="py-12">
      <Helmet>
        <title>5 Steps to Audit Readiness | CDA and Partners Consulting</title>
        <meta name="description" content="Practical checklist to prepare your organization for a smooth audit." />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-navy text-center">5 Steps to Audit Readiness</h1>
        <div className="mt-8 max-w-3xl mx-auto space-y-4 text-slate">
          <p>Get audit-ready with clear documentation, reconciliations, controls testing, and timely stakeholder alignment. These steps help reduce friction and ensure a high-quality audit process.</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Close and reconcile all ledgers; document key accounting judgments.</li>
            <li>Prepare supporting schedules for significant balances and transactions.</li>
            <li>Ensure internal controls are operating and evidenced.</li>
            <li>Coordinate with process owners and set realistic timelines.</li>
            <li>Address prior audit findings and implement remediation.</li>
          </ol>
        </div>
      </div>
    </article>
  )
}