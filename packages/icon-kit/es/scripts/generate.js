function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import * as yParser from 'yargs-parser';
import KitService from '../Service';
import resolveUserConfig from '../resolvers/resolveUserConfig';
import * as signale from 'signale';
const args = yParser(process.argv.slice(2));

_asyncToGenerator(function* () {
  const configOrConfigs = yield resolveUserConfig({
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
        yield new KitService(config).run('generate', args);
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
  yield new KitService(configOrConfigs).run('generate', args);
})();