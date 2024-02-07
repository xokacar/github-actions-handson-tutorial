import { render, screen } from '@testing-library/react';
import BasicContent from '../components/BasicContent'; // Adjust the import path as necessary
import '@testing-library/jest-dom';

describe('BasicContent Component', () => {
  test('renders the component with the expected text and iframe', () => {
    render(<BasicContent />);

    // Check if the h1 element with the correct text content exists
    const headingElement = screen.getByText(/Hands on Github Actions Workflow: CI \/ CD?/i);
    expect(headingElement).toBeInTheDocument();

    // Check if the iframe is rendered with the correct src
    const iframeElement = screen.getByTitle('Funny Cat GIF');
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute('src', 'https://giphy.com/embed/605EIJNmMuedI87uRf');
    expect(iframeElement).toHaveAttribute('width', '480');
    expect(iframeElement).toHaveAttribute('height', '457');
  });
});
