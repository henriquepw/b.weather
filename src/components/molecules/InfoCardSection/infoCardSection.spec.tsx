import React from 'react';

import { render } from '@testing-library/react-native';

import { ComponentWrapper } from '@/utils/test/componentWrapper';

import InfoCardSection from './index';

describe('Molecules -> InfoCardSection', () => {
  it('should be able to render with title, icons and lines passed as props', () => {
    const { getByTestId, getByText } = render(
      <InfoCardSection
        icon="x"
        title="any_title"
        lines={['line_1', 'line_2']}
      />,
      { wrapper: ComponentWrapper },
    );

    const card = getByTestId('card-container');
    const [icon] = card.props.children;

    const title = getByText('any_title');
    const linesContainer = getByTestId('flex-lines-container');

    expect(title).toBeTruthy();
    expect(icon.props.name).toBe('x');
    expect(linesContainer.props.children.length).toBe(2);
  });
});
