import React from 'react';

import ButtonGroup from '.';

describe('ButtonGroup', () => {
  /**
   * Style tests.
   */
  it('should render with default styles', () => {
    const actual = create(<ButtonGroup />);
    expect(actual).toMatchSnapshot();
  });

  describe('Left aligment', () => {
    it('should render with left alignment styles', () => {
      const actual = create(<ButtonGroup align="left" />);
      expect(actual).toMatchSnapshot();
    });
  });

  describe('No margin bottom', () => {
    it('should render without margin bottom styles', () => {
      const actual = create(<ButtonGroup noMargin />);
      expect(actual).toMatchSnapshot();
    });
  });

  /**
   * Accessibility tests.
   */
  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<ButtonGroup />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
