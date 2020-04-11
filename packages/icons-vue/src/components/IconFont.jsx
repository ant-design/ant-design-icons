import Icon from './Icon';
import { mergeProps } from '../utils';

const customCache = new Set();

function isValidCustomScriptUrl(scriptUrl) {
  return typeof scriptUrl === 'string' &&
    scriptUrl.length &&
    !customCache.has(scriptUrl);
}

function createScriptUrlElement(scriptUrl) {
  const script = document.createElement('script');
  script.setAttribute('src', scriptUrl);
  script.setAttribute('data-namespace', scriptUrl);
  customCache.add(scriptUrl);
  document.body.appendChild(script);
}

export default function create(options = {}) {
  const { scriptUrl, extraCommonProps = {} } = options;

  /**
   * DOM API required.
   * Make sure in browser environment.
   * The Custom Icon will create a <script/>
   * that loads SVG symbols and insert the SVG Element into the document body.
   */
  if (
    typeof document !== 'undefined' &&
    typeof window !== 'undefined' &&
    typeof document.createElement === 'function'
  ) {
    if (isValidCustomScriptUrl(scriptUrl)) {
      createScriptUrlElement(scriptUrl);
    }
    if (Array.isArray(scriptUrls)) {
      scriptUrls.forEach(url => {
        if (isValidCustomScriptUrl(url)) {
          createScriptUrlElement(url);
        }
      })
    }
  }

  const Iconfont = {
    name: 'Iconfont',
    functional: true,
    props: {
      type: String,
    },
    render(h, ctx) {
      const { data: { attrs, ...restData } = {}, props = {}, listeners, children } = ctx;
      const { type, ...restProps } = {
        ...attrs,
        ...props,
      };

      // children > type
      let content = null;
      if (props.type) {
        content = <use {...{ attrs: { 'xlink:href': `#${type}` } }} />;
      }
      if (children) {
        content = children;
      }
      const iconProps = mergeProps(extraCommonProps, {
        ...restData,
        attrs: restProps,
        on: listeners,
      });
      return <Icon {...iconProps}>{content}</Icon>;
    },
  };

  return Iconfont;
}
