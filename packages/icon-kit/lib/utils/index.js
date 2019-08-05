"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getToPath = require("./getToPath");

Object.keys(_getToPath).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getToPath[key];
    }
  });
});