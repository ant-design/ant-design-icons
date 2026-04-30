import { render } from '@testing-library/react';
import * as React from 'react';
import { SmileOutlined } from '../src';
import Icon from '../src/components/IconBase';

describe('Render with styles', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
  });

  it('icon style will inset top of head', () => {
    const head = document.querySelector('head')!;
    const meta = document.createElement('meta');
    head.appendChild(meta);
    render(<Icon icon={'Antd' as any} />);
    expect(head.firstElementChild!.tagName).toBe('STYLE');
  });

  it('shadow root support', () => {
    const shadowRoot = document.createElement('div');
    document.body.appendChild(shadowRoot);

    const shadow = shadowRoot.attachShadow({ mode: 'open' });
    const reactRoot = document.createElement('div');
    shadow.appendChild(reactRoot);

    render(<SmileOutlined />, { container: reactRoot });

    expect(document.querySelector('style')).toBeFalsy();
    expect(shadow.querySelector('style')).toBeTruthy();
  });
});
