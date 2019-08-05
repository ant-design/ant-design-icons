import debug from 'debug';
import * as signale from 'signale';
export default class PluginAPI {
  constructor(namespace, taskName) {
    this.namespace = void 0;
    this.debug = void 0;
    this.logger = void 0;

    // initialize basic
    if (namespace.endsWith('-plugin')) {
      this.namespace = namespace;
    } else {
      this.namespace = `${namespace}-plugin`;
    } // initialize utils


    const pluginUID = `${taskName}:${this.namespace}`;
    this.logger = new signale.Signale({
      scope: namespace.startsWith('build-in') ? void 0 : pluginUID
    });
    this.debug = debug(pluginUID);
  }

}