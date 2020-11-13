import * as React from 'react';
import * as renderer from 'react-test-renderer';

import IconOutline, { IconOutlineProps, outlineGlyphMap } from '../src/outline';

function mount(props: IconOutlineProps) {
  const component = renderer.create(<IconOutline {...props} />);
  return component.toJSON();
}

describe('IconOutline', () => {
  it('should create outlineGlyphMap', () => {
    expect(outlineGlyphMap).toMatchSnapshot();
  });

  it('should create Icon element.', () => {
    const icon = mount({ name: 'account-book' });
    expect((icon as any).children![0]).toBe(
      String.fromCharCode(outlineGlyphMap['account-book'])
    );
    expect(icon).toMatchSnapshot();
  });

  it('props exists', () => {
    const icon = mount({ name: 'alipay', size: 24, color: 'red' });
    expect(icon).toMatchSnapshot();
  });
});
