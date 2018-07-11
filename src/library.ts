import { IconDefinition } from './svgs';

export class Library {
  definitions: { [key: string]: IconDefinition } = {};

  reset() {
    this.definitions = {};
  }

  add(...definitions: IconDefinition[]) {
    const additions: { [key: string]: IconDefinition } =
      definitions.reduce((acc: { [key: string]: IconDefinition }, definition) => {
        acc[definition.name] = definition;
        return acc;
      }, {});

    Object.keys(additions).forEach((key) => {
      this.definitions[key] = this.definitions[key] || additions[key];
    });
  }
}

export const library = new Library();
