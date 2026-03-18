import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Game } from './game';

// Мокаем MobX store полностью
vi.mock('../stores/gameStore', () => ({
  gameStore: {
    selectAnswer: vi.fn(),
    setEssayAnswer: vi.fn(),
    currentQuestion: { 
      id: '1',
      type: 'single',
      question: 'Test question?',
      options: ['1', '2', '3'],
      difficulty: 'easy',
      correctAnswer: 0
    },
    selectedAnswers: [],
    essayAnswer: '',
    score: 0,
    progress: 50,
    currentQuestionIndex: 0,
    questions: [{}, {}],
    isLastQuestion: false,
    correctAnswersCount: 0
  }
}));


import { gameStore } from '../stores/gameStore';

describe('GameScreen', () => {
  const mockNext = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders question text', () => {
    render(<Game theme="light" toggleTheme={vi.fn()} handleNextQuestion={mockNext} />);
    expect(screen.getByText('Test question?')).toBeInTheDocument();
  });

  it('renders answer options', () => {
    render(<Game theme="light" toggleTheme={vi.fn()} handleNextQuestion={mockNext} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('calls selectAnswer when option clicked', () => {
    render(<Game theme="light" toggleTheme={vi.fn()} handleNextQuestion={mockNext} />);
    fireEvent.click(screen.getByText('1'));
    expect(gameStore.selectAnswer).toHaveBeenCalledWith(0);
  });
});