"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ProxyPropertyNames = void 0;

var _tapable = require("tapable");

var _plugins = _interopRequireDefault(require("./plugins"));

var signale = _interopRequireWildcard(require("signale"));

var _PluginAPI = _interopRequireDefault(require("./PluginAPI"));

var _Command = _interopRequireDefault(require("./Command"));

var _debug = _interopRequireDefault(require("debug"));

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _globby = require("globby");

var _fsExtra = require("fs-extra");

var _path = require("path");

var _lodash = require("lodash");

var _getToPath = require("./utils/getToPath");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const debug = (0, _debug.default)('service');
const ProxyPropertyNames = Symbol('ProxyPropertyNamesInService');
exports.ProxyPropertyNames = ProxyPropertyNames;

class KitService {
  constructor(config) {
    var _this = this;

    this.preConfig = void 0;
    this.config = null;
    this.plugins = [];
    this.commands = new Map();
    this.assets$ = null;
    this.extraAssets$ = new _rxjs.Subject();
    this[ProxyPropertyNames] = ['registerCommand', 'registerPlugin', 'generateFiles', 'asyncHooks', 'syncHooks', 'config', 'assets$', 'extraAssets$', 'writeAsset'];
    this.extraPlugins = [];
    this.asyncHooks = {
      postProcessors: new _tapable.AsyncSeriesWaterfallHook(['ensuredAsset'])
    };
    this.syncHooks = {
      beforeAssetEmit: new _tapable.SyncHook(['asset']),
      beforeExtraAssetEmit: new _tapable.SyncHook(['asset']),
      beforeAssetsTakingEffect: new _tapable.SyncHook(),
      onAssetsComplete: new _tapable.SyncHook(),
      afterAssetsTakingEffect: new _tapable.SyncHook(['subscription']),
      beforeExtraAssetsTakingEffect: new _tapable.SyncHook(),
      onExtraAssetsComplete: new _tapable.SyncHook(),
      afterExtraAssetsTakingEffect: new _tapable.SyncHook(['subscription']),
      beforeProcessor: new _tapable.HookMap(() => new _tapable.SyncHook(['processor', 'asset'])),
      afterProcessor: new _tapable.HookMap(() => new _tapable.SyncHook(['processor', 'assetProccessed'])),
      afterInitialized: new _tapable.SyncHook(),
      afterConfigInitialized: new _tapable.SyncHook(['config'])
    };
    this.processors = new _tapable.AsyncSeriesWaterfallHook(['asset']);
    this.isInitialized = false;
    this.preConfig = config;
    this.processors.intercept({
      register: tapInfo => {
        const name = tapInfo.name,
              fn = tapInfo.fn;

        tapInfo.fn =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(function* (asset) {
            const beforeHook = _this.syncHooks.beforeProcessor.get(name);

            const afterHook = _this.syncHooks.afterProcessor.get(name);

            if (beforeHook) {
              beforeHook.call(asset);
            }

            const result = yield fn(asset);

            if (afterHook) {
              afterHook.call(result);
            }

            return result;
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }();

        return tapInfo;
      }
    });
  }

  initialize() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      _this2.initializePlugins();

      _this2.initializeConfig();

      _this2.initializeFlow();

      _this2.isInitialized = true;

      _this2.syncHooks.afterInitialized.call();
    })();
  }

  initializePlugins() {
    // resolve & initialize plugins
    if (this.preConfig) {
      const preloadConfigPlugins = this.preConfig.plugins || [];
      this.plugins = [..._plugins.default, ...preloadConfigPlugins];
      debug(`Try to initialize ${this.plugins.length} plugins, ${preloadConfigPlugins.length} plugin(s) for user.`);
      this.plugins.forEach(plugin => {
        this.initializeOnePlugin(plugin);
      });
      let count = 0;

      while (this.extraPlugins.length) {
        const extraPlugins = (0, _lodash.cloneDeep)(this.extraPlugins);
        this.extraPlugins = [];
        extraPlugins.forEach(plugin => {
          this.initializeOnePlugin(plugin);
          this.plugins.push(plugin);
        });
        count++;

        if (count > 10) {
          throw new Error(`Circle detected in registering extra plugins.`);
        }
      }

      debug(`Initialzie plugins successfully!`);
    }
  }

  initializeOnePlugin(plugin) {
    const namespace = plugin.namespace,
          apply = plugin.apply,
          options = plugin.options;

    try {
      const taskName = this.config && this.config.name || this.preConfig && this.preConfig.name || 'unknown-task';
      const rawApi = new _PluginAPI.default(namespace, taskName);
      const api = new Proxy(rawApi, {
        get: (target, property) => {
          if (typeof property === 'string' && this[ProxyPropertyNames].includes(property)) {
            let result = this[property];

            if (typeof result === 'function') {
              result = result.bind(this);
            } // or return Object.freeze(result) ?


            return result;
          }

          return target[property];
        }
      });
      apply.call(plugin, api, options);
    } catch (e) {
      signale.error(e);
      process.exit(1);
    }
  }

  initializeConfig() {
    // todo
    // no Object.assign(...)
    // apply plugins
    const tempConfig = Object.freeze(this.preConfig);
    const config = Object.assign({}, {
      context: process.cwd(),
      flow: [],
      plugins: []
    }, tempConfig);
    this.config = Object.freeze(config);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.config.flow[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        const processor = _step.value;

        if (processor) {
          this.processors.tapPromise(processor.namespace, processor.transform.bind(processor));
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

    this.syncHooks.afterConfigInitialized.call(this.config);
  }

  initializeFlow() {
    const pathStream = (0, _globby.stream)(this.config.sources, {
      cwd: this.config.context,
      absolute: true
    }).setEncoding('utf8');
    this.assets$ = (0, _rxjs.fromEvent)(pathStream, 'data').pipe((0, _operators.takeUntil)((0, _rxjs.fromEvent)(pathStream, 'end'))).pipe((0, _operators.map)(path => {
      const s = (0, _fsExtra.createReadStream)(path, 'utf8'); // optimize when no destination

      if (!this.config.destination) {
        return Promise.resolve({
          from: _objectSpread({}, (0, _path.parse)(path), {
            absolute: path
          }),
          to: void 0,
          content: ''
        });
      }

      return (0, _rxjs.fromEvent)(s, 'data').pipe((0, _operators.takeUntil)((0, _rxjs.fromEvent)(s, 'end'))).pipe((0, _operators.reduce)((acc, chunk) => acc + chunk), (0, _operators.map)(content => ({
        from: _objectSpread({}, (0, _path.parse)(path), {
          absolute: path
        }),
        to: void 0,
        content
      })));
    }), (0, _operators.concatAll)()).pipe((0, _operators.map)(asset => {
      if (!this.config.destination) {
        return asset;
      }

      const from = asset.from,
            content = asset.content;
      return {
        from,
        to: (0, _getToPath.getToPath)({
          destination: this.config.destination,
          from,
          configContext: this.config.context,
          relativeBase: this.config.relativeBase
        }),
        content
      };
    })).pipe((0, _operators.map)(asset => {
      return this.processors.promise(asset);
    }), (0, _operators.concatAll)()).pipe((0, _operators.map)(asset => {
      return this.asyncHooks.postProcessors.promise(asset);
    }), (0, _operators.concatAll)());
  }

  run(command, args) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      yield _this3.initialize();
      return _this3.runCommand(command, args);
    })();
  }

  registerCommand(commandName, executor, options) {
    if (this.commands.has(commandName)) {
      signale.error(`Command ${commandName} exists!`);
      return;
    }

    this.commands.set(commandName, new _Command.default({
      name: commandName,
      executor,
      options
    }));
  }

  registerPlugin(plugin) {
    if (plugin && typeof plugin.apply === 'function' && typeof plugin.namespace === 'string') {
      this.extraPlugins.push(plugin);
    }
  }

  runCommand(name, args) {
    const command = this.commands.get(name);

    if (!command) {
      signale.error(`Command ${name} does NOT exists.`);
      process.exit(1);
    }

    const _ref2 = command,
          executor = _ref2.executor,
          options = _ref2.options;

    if (options) {
      // do something with options
      debug(`The Command ${name} with the options`, options);
    }

    return executor(args);
  }

  writeAsset(asset) {
    return _asyncToGenerator(function* () {
      const to = asset.to,
            content = asset.content;
      yield (0, _fsExtra.ensureDir)((0, _path.dirname)(to.absolute));
      const writeStream = (0, _fsExtra.createWriteStream)(to.absolute, 'utf8');
      writeStream.write(content);
      writeStream.end();
    })();
  }

}

exports.default = KitService;