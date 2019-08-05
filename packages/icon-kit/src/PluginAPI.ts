import debug, { Debugger } from 'debug';
import * as signale from 'signale';

export default class PluginAPI {
  namespace: string;
  debug: Debugger;
  logger: signale.Signale;
  constructor(namespace: string, taskName: string) {
    // initialize basic
    if (namespace.endsWith('-plugin')) {
      this.namespace = namespace;
    } else {
      this.namespace = `${namespace}-plugin`;
    }

    // initialize utils
    const pluginUID = `${taskName}:${this.namespace}`;
    this.logger = new signale.Signale({
      scope: namespace.startsWith('build-in') ? void 0 : pluginUID
    });
    this.debug = debug(pluginUID);
  }
}
