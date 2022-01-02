import React from 'react';

import { render } from '@testing-library/react-native';

import { ComponentWrapper } from '@/utils/test/componentWrapper';

import SectionTitle from './index';

describe('Atoms -> SectionTitle', () => {
  it('should be able to display the children as title', () => {
    const { getByText } = render(<SectionTitle>any_title</SectionTitle>, {
      wrapper: ComponentWrapper,
    });

    const subTitle = getByText('any_title');

    expect(subTitle).toBeTruthy();
  });
});
