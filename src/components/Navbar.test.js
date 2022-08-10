import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import App from '../App';

describe('Navbar tests', () => {
  it('Renders Navbar component ', () => {
    const tree = renderer
      .create(
        <Router>
          <Navbar />
          {' '}
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(' navigate to homepage from calculator ', () => {
    render(
      <Router initialEntries={['/calculator']}>
        <App />
        {' '}
      </Router>,
    );
    const homeLink = document.querySelector('#home-link');
    fireEvent.click(homeLink);
    expect(document.body.textContent).toMatch(/welcome/i);
  });

  it('navigate calculator from homepage', () => {
    render(
      <Router initialEntries={['/home']}>
        <App />
        {' '}
      </Router>,
    );
    const calcLink = document.querySelector('#calculator-link');
    fireEvent.click(calcLink);
    expect(document.body.textContent).toMatch(/math/i);
  });

  it('navigate to quote from homepage', () => {
    render(
      <Router initialEntries={['/home']}>
        <App />
        {' '}
      </Router>,
    );
    const quoteLink = document.querySelector('#quote-link');
    fireEvent.click(quoteLink);
    expect(document.body.textContent).toMatch(/hate/i);
  });
});
