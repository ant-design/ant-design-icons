export default class Command {
  name: string;
  executor: Function;
  options?: object;
  constructor({
    name,
    executor,
    options
  }: {
    name: string;
    executor: Function;
    options?: object;
  }) {
    this.name = name;
    this.executor = executor;
    this.options = options;
  }
}
