"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Generate = _interopRequireDefault(require("./commands/Generate"));

var _ExampleBuildInPlugin = _interopRequireDefault(require("./ExampleBuildInPlugin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const commands = [new _Generate.default({
  message: 'Hello, World!'
})];
const buildIns = [new _ExampleBuildInPlugin.default()];
var _default = [...commands, ...buildIns];
exports.default = _default;