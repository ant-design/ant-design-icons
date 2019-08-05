"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Command {
  constructor({
    name,
    executor,
    options
  }) {
    this.name = void 0;
    this.executor = void 0;
    this.options = void 0;
    this.name = name;
    this.executor = executor;
    this.options = options;
  }

}

exports.default = Command;