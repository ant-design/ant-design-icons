// https://github.com/substack/insert-css

const containers = []; // will store container HTMLElement references
const styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}

const usage =
  'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).';

function createStyleElement() {
  const styleElement = document.createElement('style');
  styleElement.setAttribute('type', 'text/css');
  return styleElement;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function insertCss(css: any, options: any): any {
  options = options || {};

  if (css === undefined) {
    throw new Error(usage);
  }

  const position = options.prepend === true ? 'prepend' : 'append';
  const container =
    options.container !== undefined ? options.container : document.querySelector('head');
  let containerId = containers.indexOf(container);

  // first time we see this container, create the necessary entries
  if (containerId === -1) {
    containerId = containers.push(container) - 1;
    styleElements[containerId] = {};
  }

  // try to get the correponding container + position styleElement, create it otherwise
  let styleElement;

  if (
    styleElements[containerId] !== undefined &&
    styleElements[containerId][position] !== undefined
  ) {
    styleElement = styleElements[containerId][position];
  } else {
    styleElement = styleElements[containerId][position] = createStyleElement();

    const referenceNode = position === 'prepend' ? container.childNodes[0] || null : null;
    container.insertBefore(styleElement, referenceNode);
  }

  // strip potential UTF-8 BOM if css was read from a file
  if (css.charCodeAt(0) === 0xfeff) {
    css = css.substr(1, css.length);
  }

  // actually add the stylesheet
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText += css;
  } else {
    styleElement.textContent += css;
  }

  return styleElement;
}

export default insertCss;
