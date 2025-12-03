import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function Contact(){
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      // Placeholder: integrate backend endpoint later
      console.log('Form submission', payload)
      setStatus('Submitted successfully. We will contact you shortly.')
      e.currentTarget.reset()
    } catch (err){
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <div className="py-12">
      <Helmet>
        <title>Contact | CDA and Partners Consulting</title>
        <meta name="description" content="Get in touch to discuss audit, accounting, or tax advisory needs." />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-navy text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto bg-white rounded-xl p-6 shadow grid gap-4">
          <label className="grid gap-2">
            <span className="font-medium">Name</span>
            <input name="name" type="text" required className="border rounded-lg px-3 py-2" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">Email</span>
            <input name="email" type="email" required className="border rounded-lg px-3 py-2" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">Message</span>
            <textarea name="message" rows="4" required className="border rounded-lg px-3 py-2" />
          </label>
          <button className="px-4 py-2 rounded-lg bg-azure text-white font-semibold hover:brightness-110" type="submit">Send Message</button>
          {status && <p className="text-deep">{status}</p>}
        </form>
      </div>
    </div>
  )
}