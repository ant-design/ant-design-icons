import * as React from 'react';
import Icon from './Icon';
import type { IconBaseProps } from './Icon';

const customCache = new Set<string>();
const iconFontTypes = new Set<string>();

export interface CustomIconOptions {
  scriptUrl?: string | string[];
  extraCommonProps?: Record<string, unknown>;
}

export interface IconFontProps<T extends string = string> extends IconBaseProps {
  type: T;
}

interface CompoundedComponent<T extends string = string>
  extends React.ForwardRefExoticComponent<
    IconFontProps<T> & React.RefAttributes<HTMLSpanElement>
  > {
  iconFontTypes: Set<string>;
}

function isValidCustomScriptUrl(scriptUrl: string): boolean {
  return Boolean(
    typeof scriptUrl === 'string'
      && scriptUrl.length
      && !customCache.has(scriptUrl)
  );
}

function getIconFontTypes(scriptUrl: string): void {
  try {
    // will load scriptUrl form disk cache
    fetch(scriptUrl)
      .then((r) => r.text())
      .then((result) => {
          // Since Safari doesn't support trailing assertion, matchAll is used here. See here for details：https://stackoverflow.com/a/51568859
          const matches = result.matchAll(/(?:<symbol id=")(\S*)(?=")/g);
          [...matches].forEach((match) => iconFontTypes.add(match[1]))
      });
  } catch (e) {
    console.log("iconfont types load failed", e);
  }
}

function createScriptUrlElements(scriptUrls: string[], index: number = 0): void {
  const currentScriptUrl = scriptUrls[index];
  if (isValidCustomScriptUrl(currentScriptUrl)) {
    const script = document.createElement('script');
    script.setAttribute('src', currentScriptUrl);
    script.setAttribute('data-namespace', currentScriptUrl);
    if (scriptUrls.length > index + 1) {
      script.onload = () => {
        getIconFontTypes(currentScriptUrl);
        createScriptUrlElements(scriptUrls, index + 1);
      };
      script.onerror = () => {
        createScriptUrlElements(scriptUrls, index + 1);
      };
    }
    customCache.add(currentScriptUrl);
    document.body.appendChild(script);
  }
}

export default function create<T extends string = string>(
  options: CustomIconOptions = {}
): React.FC<IconFontProps<T>> {
  const { scriptUrl, extraCommonProps = {} } = options;

  /**
   * DOM API required.
   * Make sure in browser environment.
   * The Custom Icon will create a <script/>
   * that loads SVG symbols and insert the SVG Element into the document body.
   */
  if (
    scriptUrl &&
    typeof document !== 'undefined' &&
    typeof window !== 'undefined' &&
    typeof document.createElement === 'function'
  ) {
    if (Array.isArray(scriptUrl)) {
      // 因为iconfont资源会把svg插入before，所以前加载相同type会覆盖后加载，为了数组覆盖顺序，倒叙插入
      createScriptUrlElements(scriptUrl.reverse());
    } else {
      createScriptUrlElements([scriptUrl]);
    }
  }

  const InternalIconfont: React.ForwardRefRenderFunction<HTMLSpanElement, IconFontProps<T>> = (props, ref) => {
    const { type, children, ...restProps } = props;

    // children > type
    let content: React.ReactNode = null;
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
  }

  const Iconfont = React.forwardRef<HTMLSpanElement, IconFontProps<T>>(InternalIconfont) as CompoundedComponent<T>;

  Iconfont.displayName = 'Iconfont';
  Iconfont.iconFontTypes = iconFontTypes;

  return Iconfont;
}
