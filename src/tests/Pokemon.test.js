import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
/* eslint max-len: ["error", { "ignoreStrings": true }] */

describe('Teste o componente <Pokemon.js />', () => {
  it('Teste se existe um ícone de estrela nos pokémons favoritados:', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    expect(moreDetails).toBeInTheDocument();

    userEvent.click(moreDetails);

    const pokemonFavorito = screen.getByLabelText(/Pokémon favoritado?/i);
    expect(pokemonFavorito).toBeInTheDocument();

    userEvent.click(pokemonFavorito);

    const imgFavorita = screen.getByAltText(/pikachu is marked as favorite/i);
    expect(imgFavorita.src).toContain('/star-icon.svg');
  });
  it('A imagem do pokémon deve ser exibida. Ela deve conter um atributo src com a URL da imagem e um atributo alt com o texto <name> sprite, onde <name> é o nome do pokémon.', () => {
    renderWithRouter(<App />);
    const pikachuImg = screen.getByAltText(/pikachu sprite/i);
    expect(pikachuImg.src).toContain('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
  it('O tipo correto do pokémon deve ser mostrado na tela;', () => {
    renderWithRouter(<App />);
    const tipo = screen.getByTestId('pokemon-type');
    expect(tipo).toHaveTextContent(/Electric/i);
  });
});
