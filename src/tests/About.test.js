import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Teste o componente <About.js />', () => {
  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);

    const titleH2 = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(titleH2).toBeInTheDocument();
  });
  it('Teste se a página contém a imagem de uma Pokédex:', () => {
    renderWithRouter(<About />);

    const imgPokeDex = screen.getByAltText('Pokédex');
    expect(imgPokeDex.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
