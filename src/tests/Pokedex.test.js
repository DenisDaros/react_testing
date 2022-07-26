import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const title = screen
      .getByRole('heading', { name: /Encountered pokémons/i, level: 2 });
    expect(title).toBeInTheDocument();
  });
  it('Teste se é exibido o próximo pokémon da lista', () => {
    renderWithRouter(<App />);
    const btn = screen.getByRole('button', { name: /Próximo pokémon/i });
    const namePokemon = screen.getByTestId('pokemon-name');

    expect(btn).toBeInTheDocument();

    userEvent.click(btn);
    expect(namePokemon).toBeInTheDocument();
  });
  it('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const numberMagic = 7;
    const dataId = screen.getAllByTestId('pokemon-type-button');
    expect(dataId.length).toBe(numberMagic);

    const nomesBtn = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
    nomesBtn.forEach((i) => {
      const nomeBtn = screen.getByRole('button', { name: i });
      expect(nomeBtn).toBeVisible();
    });
  });
  it('Teste se a Pokédex contém um botão para resetar o filtro:', () => {
    renderWithRouter(<App />);
    const btnAll = screen.getByRole('button', { name: /all/i });
    expect(btnAll).toBeInTheDocument();
    userEvent.click(btnAll);
    const pokemonName = screen.getByText(/Pikachu/i);
    expect(pokemonName).toBeInTheDocument();
  });
});
