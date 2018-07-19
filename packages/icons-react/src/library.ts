import { IconDefinition } from '@ant-design/icons';

export class Library {
  definitions = new Map<string, IconDefinition>();

  add(...icons: IconDefinition[]) {
    icons.forEach((icon) => {
      this.definitions.set(icon.name, icon);
    });
  }

  clear() {
    this.definitions.clear();
  }

  get(key: string) {
    return this.definitions.get(key);
  }
}
