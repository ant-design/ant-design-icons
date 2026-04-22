import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect, vi } from 'vitest';

const enzymeToJson = require('enzyme-to-json');
const serializer =
  typeof enzymeToJson.createSerializer === 'function'
    ? enzymeToJson.createSerializer({ mode: 'deep' })
    : enzymeToJson.default;

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(serializer);

(globalThis as any).jest = vi;
