"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resolveUserConfig;
exports.CONFIG_FILES = exports.MODULE_NAME = void 0;

var _fsExtra = require("fs-extra");

var signale = _interopRequireWildcard(require("signale"));

var _path = require("path");

var _loadDefaultModuleFirst = _interopRequireDefault(require("../utils/loadDefaultModuleFirst"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const MODULE_NAME = 'iconkit';
exports.MODULE_NAME = MODULE_NAME;
const CONFIG_FILES = [`.${MODULE_NAME}rc.js`, `.${MODULE_NAME}rc.ts`, `${MODULE_NAME}.config.js`, `${MODULE_NAME}.config.ts`];
exports.CONFIG_FILES = CONFIG_FILES;

function resolveUserConfig(_x) {
  return _resolveUserConfig.apply(this, arguments);
}

function _resolveUserConfig() {
  _resolveUserConfig = _asyncToGenerator(function* ({
    cwd
  }) {
    const configFilePath = yield getFirstExistFilePath({
      cwd,
      filePaths: CONFIG_FILES
    });

    if (!configFilePath) {
      signale.fatal(`Cannot find any config file!`);
      return null;
    }

    signale.pending(`Load config file from ${_chalk.default.underline.cyan(configFilePath)}.`);
    const userConfig = (0, _loadDefaultModuleFirst.default)(require(configFilePath));

    if (Array.isArray(userConfig) || userConfig && Array.isArray(userConfig.sources)) {
      return userConfig;
    }

    signale.error(`Cannot resolve the config`, userConfig);
    return null;
  });
  return _resolveUserConfig.apply(this, arguments);
}

function getFirstExistFilePath(_x2) {
  return _getFirstExistFilePath.apply(this, arguments);
}

function _getFirstExistFilePath() {
  _getFirstExistFilePath = _asyncToGenerator(function* ({
    cwd,
    filePaths
  }) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = filePaths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        const filePath = _step.value;
        const absoluteFilePath = (0, _path.join)(cwd, filePath);

        if (yield (0, _fsExtra.pathExists)(absoluteFilePath)) {
          return absoluteFilePath;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return null;
  });
  return _getFirstExistFilePath.apply(this, arguments);
}