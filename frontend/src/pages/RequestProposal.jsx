import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function RequestProposal(){
  const [status, setStatus] = useState(null)
  async function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      console.log('Proposal request', payload)
      setStatus('Proposal request submitted. We will reach out.')
      e.currentTarget.reset()
    } catch(err){
      setStatus('Unable to submit at this time.')
    }
  }
  return (
    <div className="py-12">
      <Helmet>
        <title>Request a Proposal | CDA and Partners Consulting</title>
        <meta name="description" content="Request a tailored proposal for audit, accounting, tax, or advisory services." />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-navy text-center">Request a Proposal</h1>
        <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto bg-white rounded-xl p-6 shadow grid gap-4">
          <label className="grid gap-2">
            <span className="font-medium">Company</span>
            <input name="company" type="text" required className="border rounded-lg px-3 py-2" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">Contact Email</span>
            <input name="email" type="email" required className="border rounded-lg px-3 py-2" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">Service Interest</span>
            <select name="service" required className="border rounded-lg px-3 py-2">
              <option>Statutory Audit</option>
              <option>Internal Audit & Risk</option>
              <option>IFRS Advisory</option>
              <option>Accounting Services</option>
              <option>Tax Consulting</option>
              <option>Transaction Advisory</option>
            </select>
          </label>
          <label className="grid gap-2">
            <span className="font-medium">Notes</span>
            <textarea name="notes" rows="4" className="border rounded-lg px-3 py-2" />
          </label>
          <button className="px-4 py-2 rounded-lg bg-azure text-white font-semibold hover:brightness-110" type="submit">Submit Request</button>
          {status && <p className="text-deep">{status}</p>}
        </form>
      </div>
    </div>
  )
}