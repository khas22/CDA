import { useState } from 'react'
import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-pale text-slate py-10 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} CDA and Partners Consulting. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a className="hover:text-deep" href="/privacy">Privacy Policy</a>
            <a className="hover:text-deep" href="/terms">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}