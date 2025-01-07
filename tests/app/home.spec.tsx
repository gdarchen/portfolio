import { expect, it } from 'vitest'

import Home from '@/app/home'
import { render, screen, waitFor } from '@testing-library/react'

it('Home', async () => {
  render(<Home />)
  await waitFor(() => {
    expect(screen.getByText('Gautier Darchen.')).toBeDefined()
  })
})
