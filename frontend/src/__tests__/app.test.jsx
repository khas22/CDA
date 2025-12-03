import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from '../App'

function renderApp(){
  return render(
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  )
}

describe('App routing and layout', () => {
  it('renders global navbar', () => {
    renderApp()
    expect(screen.getByLabelText(/CDA and Partners Consulting - Home/i)).toBeDefined()
  })

  it('renders home content section', () => {
    renderApp()
    const matches = screen.getAllByText(/Core Services/i)
    expect(matches.length).toBeGreaterThan(0)
  })
})