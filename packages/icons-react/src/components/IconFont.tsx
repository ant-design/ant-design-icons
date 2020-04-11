import * as React from 'react';
import Icon, { IconBaseProps } from './Icon';

const customCache = new Set<string>();

export interface CustomIconOptions {
  scriptUrl?: string;
  scriptUrls?: string[];
  extraCommonProps?: { [key: string]: any };
}

export interface IconFontProps extends IconBaseProps {
  type: string;
}

function isValidCustomScriptUrl(scriptUrl: string): boolean {
  return typeof scriptUrl === 'string' &&
    scriptUrl.length &&
    !customCache.has(scriptUrl);
}

function createScriptUrlElement(scriptUrl: string): void {
  const script = document.createElement('script');
  script.setAttribute('src', scriptUrl);
  script.setAttribute('data-namespace', scriptUrl);
  customCache.add(scriptUrl);
  document.body.appendChild(script);
}

export default function create(options: CustomIconOptions = {}): React.SFC<IconFontProps> {
  const { scriptUrl, scriptUrls, extraCommonProps = {} } = options;

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

  const Iconfont = React.forwardRef<HTMLSpanElement, IconFontProps>((props, ref) => {
    const { type, children, ...restProps } = props;

    // children > type
    let content = null;
    if (props.type) {
      content = <use xlinkHref={`#${type}`} />;
    }
    if (children) {
      content = children;
    }
    return (
      <Icon {...extraCommonProps} {...restProps} ref={ref}>
        {content}
      </Icon>
    );
  });

  Iconfont.displayName = 'Iconfont';

  return Iconfont;
}
