import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente <App.js />', () => {
  it('O primeiro link deve possuir o texto Home', () => {
    renderWithRouter(<App />);

    const home = screen.getByRole('link', { name: /Home/i });
    expect(home).toBeInTheDocument();
  });

  it('O segundo link deve possuir o texto About', () => {
    renderWithRouter(<App />);

    const home = screen.getByRole('link', { name: /About/i });
    expect(home).toBeInTheDocument();
  });

  it('O terceiro link deve possuir o texto Favorite Pokémons', () => {
    renderWithRouter(<App />);

    const home = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(home).toBeInTheDocument();
  });
});
