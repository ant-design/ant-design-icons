"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _debug = _interopRequireDefault(require("debug"));

var signale = _interopRequireWildcard(require("signale"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PluginAPI {
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
    this.debug = (0, _debug.default)(pluginUID);
  }

}

exports.default = PluginAPI;