import { render } from '@testing-library/react';
import * as React from 'react';
import { SmileOutlined } from '../src';
import Icon from '../src/components/IconBase';
import IconContext from '../src/components/Context';

const IconProvider = IconContext.Provider;

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

describe('zeroRuntime', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
  });

  it('should not inject styles when zeroRuntime is true', () => {
    mount(
      <IconProvider value={{ zeroRuntime: true }}>
        <Icon icon={'Antd' as any} />
      </IconProvider>,
    );

    expect(document.querySelector('style')).toBeFalsy();
  });

  it('should still inject styles when zeroRuntime is false', () => {
    mount(
      <IconProvider value={{ zeroRuntime: false }}>
        <Icon icon={'Antd' as any} />
      </IconProvider>,
    );

    expect(document.querySelector('style')).toBeTruthy();
  });

  it('should still inject styles when zeroRuntime is not set', () => {
    mount(<Icon icon={'Antd' as any} />);

    expect(document.querySelector('style')).toBeTruthy();
  });

  it('should not inject styles into shadow root when zeroRuntime is true', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const shadow = container.attachShadow({ mode: 'open' });
    const reactRoot = document.createElement('div');
    shadow.appendChild(reactRoot);

    mount(
      <IconProvider value={{ zeroRuntime: true }}>
        <SmileOutlined />
      </IconProvider>,
      { attachTo: reactRoot },
    );

    expect(document.querySelector('style')).toBeFalsy();
    expect(shadow.querySelector('style')).toBeFalsy();
  });
});
