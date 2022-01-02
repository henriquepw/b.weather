import React from 'react';

import { render } from '@testing-library/react-native';

import { ComponentWrapper } from '@/utils/test/componentWrapper';

import SectionSubTitle from './index';

describe('Atoms -> SectionSubTitle', () => {
  it('should be able to display the children as subtitle', () => {
    const { getByText } = render(
      <SectionSubTitle>any_subtitle</SectionSubTitle>,
      { wrapper: ComponentWrapper },
    );

    const subTitle = getByText('any_subtitle');

    expect(subTitle).toBeTruthy();
  });
});
