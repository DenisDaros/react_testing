import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Teste o componente <NotFound.js />', () => {
  it('Teste se a página contém o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);

    const title = screen.getByText(/Page requested not found/i);
    expect(title).toBeInTheDocument();
  });

  it('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<NotFound />);

    const imgNotFound = screen
      .getByAltText('Pikachu crying because the page requested was not found');
    expect(imgNotFound.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
