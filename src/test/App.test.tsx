import { render, screen } from '@testing-library/react';
import React from 'react';

import App from '../App';

test('renders all links', () => {
  render(<App />);
  const links = screen.getAllByRole('link');
  let expectedLinks: RegExp[] = [
    /mailto:todd.judd@gmail.com/i,
    /https:\/\/www.linkedin.com\/in\/todd-judd-432a86b4/i,
    /https:\/\/github.com\/toddjudd/i,
  ];
  links.map((link) => {
    expect(link.hasAttribute('href'));
    const expectedLinkIndex = expectedLinks.findIndex((regex: RegExp) => {
      return link.attributes.getNamedItem('href')?.value.match(regex);
    });
    expect(expectedLinkIndex).toBeGreaterThan(-1);
    expectedLinks = expectedLinks.filter((_, i) => i !== expectedLinkIndex);
  });
  expect(expectedLinks.length).toEqual(0);
});
