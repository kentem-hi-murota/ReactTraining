import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { SimpleApp } from '../../Components';

describe('ボタンの動作テスト', () => {
  render(<SimpleApp />);
  const plusButton = screen.getByRole('button', { name: '+' });
  const minusButton = screen.getByRole('button', { name: '-' });
  const label = screen.getByRole('label');
  test('+がある', () => {
    expect(plusButton).toBeInTheDocument();
  });

  test('-がある', () => {
    expect(minusButton).toBeInTheDocument();
  });

  const user = userEvent.setup();
  test('+を押すと値が増える', async () => {
    await user.click(plusButton);
    expect(label).toHaveTextContent('1');
  });
});
