import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from '../components/layout/Navbar';

describe('<Navbar />', () => {
  let component;

  beforeEach(() => {
    component = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
  });

  test('It should render', () => {
    component.getByText('GitHub Finder');
  });

  test('it should havea Link to Home', () => {
    component.getByText('Home');
  });

  test('it should havea Link to Home', () => {
    component.getByText('About');
  });
});
