import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Start } from './start';

describe('StartScreen', () => {
  it('renders title and start button', () => {
    render(
      <Start
        theme="light"
        soundEnabled={true}
        toggleTheme={vi.fn()}
        handleStartGame={vi.fn()}
      />
    );

    expect(screen.getByText('Quiz Game')).toBeInTheDocument();
    expect(screen.getByText('Начать игру')).toBeInTheDocument();
  });

  it('calls onStart when start button is clicked', () => {
    const mockStart = vi.fn();

    render(
      <Start
        theme="light"
        soundEnabled={true}
        toggleTheme={vi.fn()}
        handleStartGame={mockStart}
      />
    );

    fireEvent.click(screen.getByText('Начать игру'));

    expect(mockStart).toHaveBeenCalledTimes(1);
  });

  it('calls toggleTheme when theme button clicked', () => {
    const mockToggle = vi.fn();

    render(
      <Start
        theme="light"
        soundEnabled={true}
        toggleTheme={mockToggle}
        handleStartGame={vi.fn()}
      />
    );

    fireEvent.click(screen.getByText('🌙'));

    expect(mockToggle).toHaveBeenCalled();
  });
});