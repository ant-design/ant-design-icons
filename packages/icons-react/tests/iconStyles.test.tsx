import * as React from 'react';
import { mount } from 'enzyme';
import Icon from '../src/components/IconBase';

describe('Render with styles', () => {
  it('icon style will inset top of head', () => {
    const head = document.querySelector('head');
    const meta = document.createElement('meta');
    head.appendChild(meta);
    mount(<Icon icon={'Antd' as any} />);
    expect(head.firstElementChild.tagName).toBe('STYLE');
  })
});
