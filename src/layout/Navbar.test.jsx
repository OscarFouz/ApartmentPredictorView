import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders title and action buttons', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText(/Panel de Gestión/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /\+ Apartment/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /\+ School/i })).toBeInTheDocument();
  });
});
