import * as React from 'react';
import * as renderer from 'react-test-renderer';

import IconFill, { fillGlyphMap, IconFillProps } from '../src/fill';

function mount(props: IconFillProps) {
  const component = renderer.create(<IconFill {...props} />);
  return component.toJSON();
}

describe('IconFill', () => {
  it('should create Icon element.', () => {
    const icon = mount({ name: 'account-book' });
    expect(icon!.children![0]).toBe(String.fromCharCode(fillGlyphMap['account-book']));
    expect(icon).toMatchSnapshot();
  });
});
