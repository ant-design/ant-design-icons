/**
 * jsonp options
 *
 * @property prefix: optional. Prefix of jsonp callback function. Default is `__jp`.
 * @property timeout: optional. Query timeout in milliseconds. Default is `60000`.
 * @property name: optional. Name of the callback function. If set, `prefix` would be ignored.
 * @property param: name of the query string parameter to specify the callback. Default: `callback`.
 */
export interface IPjsonpOptions {
  prefix?: string;
  timeout?: number;
  param?: string;
  name?: string;
}

export interface IPjsonpParams {
  [key: string]: string | number;
}

let uid = 0;

const enc = encodeURIComponent;

const defaultOptions: IPjsonpOptions = {
  prefix: '__jp',
  timeout: 60000,
  param: 'callback'
};

function noop(): void {}

/**
 * Start a jsonp to query something.
 * @param url url
 * @param options jsonp options
 */
function pjsonp<T = any>(url: string, options: IPjsonpOptions): Promise<T>;

/**
 * Start a jsonp with parameters.
 * @param url url
 * @param params query parameters
 * @param options jsonp options
 */
function pjsonp<T = any>(
  url: string,
  params: IPjsonpParams,
  options: IPjsonpOptions
): Promise<T>;

function pjsonp<T = any>(
  url: string,
  paramsOrOptions: IPjsonpParams | IPjsonpOptions,
  options?: IPjsonpOptions
): Promise<T> {
  let params: IPjsonpParams;

  if (typeof options === 'undefined') {
    options = paramsOrOptions;
    params = {};
  } else {
    params = paramsOrOptions as IPjsonpParams;
  }

  const mergedOptions = { ...defaultOptions, ...options } as Required<
    IPjsonpOptions
  >;

  const callbackName = mergedOptions.name || mergedOptions.prefix + `${uid++}`;

  let timer: number;
  const target = document.getElementsByTagName('script')[0] || document.head;
  const script: HTMLScriptElement = document.createElement('script');

  function prepareParameters(): string {
    // Get the query param prefix.
    url += url.indexOf('?') > 0 ? '' : '?';

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const value = params[key] || '';
        url += `&${enc(key)}=${enc(`${value}`)}`;
      }
    }

    if (mergedOptions.param !== null) {
      url += `&${enc(mergedOptions.param)}=${enc(callbackName)}`;
    }

    url = url.replace('?&', '?').replace(/\?$/, '');

    return url;
  }

  function start(): void {
    script.src = prepareParameters();
    target.parentNode!.appendChild(script);
  }

  function clean(): void {
    if (script.parentNode) {
      script.parentNode.removeChild(script);
    }

    if (timer) {
      clearTimeout(timer);
    }

    // @ts-ignore
    window[callbackName] = noop;
  }

  return new Promise((res, rej) => {
    start();

    // @ts-ignore
    window[callbackName] = (data: T) => {
      clean();
      res(data);
    };
  });
}

export default pjsonp;
