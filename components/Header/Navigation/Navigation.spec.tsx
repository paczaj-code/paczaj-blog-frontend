import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navigation from './Navigation';
import { menuItems } from '../../../utils/menuItems';
// import { useRouter } from 'next/router';
// import mockRouter from 'next-router-mock';

const click = jest.fn();

jest.mock('next/router', () => require('next-router-mock'));

describe('Test for Navigation component', () => {
  beforeEach(() => {
    render(
      <Navigation showMenu={false} onClick={click} menuItems={menuItems} />
    );
  });
  it('it should be 5 list elements', () => {
    const linkItems = screen.getAllByRole('listitem');
    expect(linkItems.length).toEqual(5);
  });

  it('it should be proper class', () => {
    const linkItems = screen.getAllByRole('link');
    expect(linkItems[0]).toHaveClass('menu__link');
  });

  it('it should be "Home" as first link', () => {
    const links = screen.getAllByRole('link');
    expect(links[0].innerHTML).toEqual('Home');
    expect(links[0]).toHaveAttribute('href', '/');
  });
  it('it should be "Blog" as second link', () => {
    const links = screen.getAllByRole('link');
    expect(links[1].innerHTML).toEqual('Blog');
    expect(links[1]).toHaveAttribute('href', '/blog');
  });
  it('it should be "Exercises" as third link', () => {
    const links = screen.getAllByRole('link');
    expect(links[2].innerHTML).toEqual('Ćwiczenia');
    expect(links[2]).toHaveAttribute('href', '/exercises');
  });
  it('it should be "Glossary" as 4th link', () => {
    const links = screen.getAllByRole('link');
    expect(links[3].innerHTML).toEqual('Słowniczek');
    expect(links[3]).toHaveAttribute('href', '/glossary');
  });
  it('it should be "About" as 4th link', () => {
    const links = screen.getAllByRole('link');
    expect(links[4].innerHTML).toEqual('O mnie');
    expect(links[4]).toHaveAttribute('href', '/about');
  });
  it('it should be onClick fuction fired once', async () => {
    const nav = screen.getByRole('navigation');

    await userEvent.click(nav);
    expect(click).toBeCalledTimes(1);
    expect(nav).not.toHaveClass('show__menu');
  });
});
