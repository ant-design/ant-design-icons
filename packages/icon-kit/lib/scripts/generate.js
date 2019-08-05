"use strict";

var yParser = _interopRequireWildcard(require("yargs-parser"));

var _Service = _interopRequireDefault(require("../Service"));

var _resolveUserConfig = _interopRequireDefault(require("../resolvers/resolveUserConfig"));

var signale = _interopRequireWildcard(require("signale"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const args = yParser(process.argv.slice(2));

_asyncToGenerator(function* () {
  const configOrConfigs = yield (0, _resolveUserConfig.default)({
    cwd: process.cwd()
  }); // Failure

  if (!configOrConfigs) {
    signale.fatal(`Failed to resolve config(s).`);
    return;
  } // Success
  // Multi


  if (Array.isArray(configOrConfigs)) {
    signale.success(`Resolve ${configOrConfigs.length} config(s) successfully.`);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = configOrConfigs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        const config = _step.value;
        yield new _Service.default(config).run('generate', args);
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

    return;
  } // Single


  signale.success(`Resolve config successfully.`);
  yield new _Service.default(configOrConfigs).run('generate', args);
})();