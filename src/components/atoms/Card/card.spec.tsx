import React from 'react';

import { cleanup, render, waitFor } from '@testing-library/react-native';

import theme from '@/styles/theme';

import { ComponentWrapper } from '@/utils/test/componentWrapper';

import Card from './index';

describe('Atoms -> Card', () => {
  it('should be able to display a card with correct style', () => {
    const { getByTestId } = render(<Card testID="card" />, {
      wrapper: ComponentWrapper,
    });

    const cardElement = getByTestId('card');

    expect(cardElement.props.style.backgroundColor).toBe(
      theme.colors.trueGray[800],
    );

    expect(cardElement.props.style.borderRadius).toBe(16);

    expect(cardElement.props.style.paddingRight).toBe(24);
    expect(cardElement.props.style.paddingLeft).toBe(24);
    expect(cardElement.props.style.paddingTop).toBe(24);
    expect(cardElement.props.style.paddingBottom).toBe(24);
  });
});
