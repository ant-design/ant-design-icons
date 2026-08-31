import createFromIconfontCN from '../src/components/IconFont';

describe('createFromIconfontCN script loading', () => {
  afterEach(() => {
    document
      .querySelectorAll('script[data-namespace^="/iconfont-cache-test-react-"]')
      .forEach((script) => script.remove());
  });

  it('continues loading after a cached script URL', () => {
    const cachedUrl = '/iconfont-cache-test-react-cached.js';
    const freshUrl = '/iconfont-cache-test-react-fresh.js';

    createFromIconfontCN({ scriptUrl: cachedUrl });
    createFromIconfontCN({ scriptUrl: [freshUrl, cachedUrl] });

    expect(
      [...document.querySelectorAll('script')].some(
        (script) => script.dataset.namespace === freshUrl,
      ),
    ).toBe(true);
  });
});
