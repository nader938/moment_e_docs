import { render, screen } from '@testing-library/react';
import HomepageFeatures from '../index';

describe('HomepageFeatures', () => {
  it('renders three feature cards', () => {
    render(<HomepageFeatures />);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3);
  });

  it('renders an icon for each feature', () => {
    render(<HomepageFeatures />);
    expect(screen.getAllByRole('img')).toHaveLength(3);
  });

  it('renders the expected feature titles', () => {
    render(<HomepageFeatures />);
    ['Easy to Use', 'Focus on What Matters', 'Powered by React'].forEach(
      (title) => {
        expect(
          screen.getByRole('heading', { name: title })
        ).toBeInTheDocument();
      }
    );
  });

  it('renders a description under each title', () => {
    render(<HomepageFeatures />);
    expect(
      screen.getByText(/easily installed and used/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/focus on your docs/i)).toBeInTheDocument();
    expect(screen.getByText(/reusing React/i)).toBeInTheDocument();
  });
});
