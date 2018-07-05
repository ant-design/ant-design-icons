export class Library {
  definitions: {
    [key: string]: IconDefinition
  } = {};

  reset() {
    this.definitions = {};
  }

  add(...definitions: IconDefinition[]) {
    const additions = definitions.reduce((additions, definition) => {
      additions[definition.iconName] = definition;
      return additions;
    }, {} as {
      [key: string]: IconDefinition
    });

    Object.keys(additions).forEach((key) => {
      this.definitions[key] = this.definitions[key] || additions[key];
    });
  }
}

export const library = new Library();

export const dom = {
  mountSVGDefinitions(elementId: string) {
    let template = '<svg id="' + elementId + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: none;">'
      + '<%= SYMBOLS %>'
      + '</svg>';
    const html = template.replace('<%= SYMBOLS %>', Object.keys(library.definitions).map((key) => {
      return library.definitions[key].content;
    }).join('\n'));
    if (canUseDomAPI()) {
      document.body.insertAdjacentHTML('afterbegin', html);
    }
  }
};

export interface IconDefinition {
  iconName: string;
  content: string;
  prefix: string;
}

function canUseDomAPI() {
  function noop() { }
  let _WINDOW: any = {};
  let _DOCUMENT: any = {};
  let _MUTATION_OBSERVER$1 = null;
  let _PERFORMANCE = { mark: noop, measure: noop };

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
    if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER$1 = MutationObserver;
    if (typeof performance !== 'undefined') _PERFORMANCE = performance as any;
  } catch (e) { }

  let _ref = _WINDOW.navigator || {};
  let _ref$userAgent = _ref.userAgent;
  let userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

  let WINDOW = _WINDOW;
  let DOCUMENT = _DOCUMENT;
  let MUTATION_OBSERVER = _MUTATION_OBSERVER$1;
  let PERFORMANCE = _PERFORMANCE;

  let IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  return IS_DOM;
}
