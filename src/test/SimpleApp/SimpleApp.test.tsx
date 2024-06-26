import { getByLabelText, render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, test } from 'vitest';
import { SimpleApp } from '../../Components';

describe('ボタンの動作テスト', () => {
  let plusButton: HTMLButtonElement;
  let minusButton: HTMLButtonElement;
  let label: HTMLLabelElement;
  let user: UserEvent;
  beforeEach(() => {
    render(<SimpleApp />);
    plusButton = screen.getByRole('button', { name: '+' });
    minusButton = screen.getByRole('button', { name: '-' });
    label = screen.getByLabelText('label');
  });

  test('+がある', () => {
    expect(plusButton).toBeInTheDocument();
  });

  test('-がある', () => {
    expect(minusButton).toBeInTheDocument();
  });

  test('+を押すと値が増える', async () => {
    user = userEvent.setup();
    await user.click(plusButton);
    expect(label).toHaveTextContent('count:1');
  });

  test('-を押す 0の時には減らない', async () => {
    user = userEvent.setup();
    await user.click(minusButton);
    expect(label).toHaveTextContent('count:0');
  });

  test('-を押す 1の時には減る', async () => {
    user = userEvent.setup();
    await user.click(plusButton);
    expect(label).toHaveTextContent('count:1');
    await user.click(minusButton);
    expect(label).toHaveTextContent('count:0');
  });
});

/// ボタンが通るなら通る。ボタンが通らないときの原因切り分けのためにしかならない？
describe('ラベルの表示テスト', () => {
  let label: HTMLLabelElement;
  beforeEach(() => {
    render(<SimpleApp />);
    label = screen.getByLabelText('label');
  });

  test('ラベルが存在', () => {
    label = screen.getByLabelText('label');
    expect(label).toBeInTheDocument();
  });

  test('ラベルの初期値がcount:0', () => {
    label = screen.getByLabelText('label');
    expect(label).toHaveTextContent('count:0');
  });
});
