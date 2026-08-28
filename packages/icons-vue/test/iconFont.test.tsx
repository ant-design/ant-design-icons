import createFromIconfontCN from '../src/components/IconFont';

describe('createFromIconfontCN script loading', () => {
  afterEach(() => {
    document
      .querySelectorAll('script[data-namespace^="/iconfont-cache-test-vue-"]')
      .forEach(script => script.remove());
  });

  it('continues loading after a cached script URL', () => {
    const cachedUrl = '/iconfont-cache-test-vue-cached.js';
    const freshUrl = '/iconfont-cache-test-vue-fresh.js';

    createFromIconfontCN({ scriptUrl: cachedUrl });
    createFromIconfontCN({ scriptUrl: [freshUrl, cachedUrl] });

    expect(
      [...document.querySelectorAll('script')].some(
        script => script.dataset.namespace === freshUrl,
      ),
    ).toBe(true);
  });
});
