"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadDefaultModuleFirst;

function loadDefaultModuleFirst(module) {
  return module.default || module;
}