import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('Should render link and children', () => {
    render(<LinkWrapper href="/my-link">Link</LinkWrapper>)

    const children = screen.getByText(/link/i)

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')
  })
})
