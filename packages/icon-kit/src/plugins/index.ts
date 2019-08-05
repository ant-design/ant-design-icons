import Generate from './commands/Generate';
import ExampleBuildInPlugin from './ExampleBuildInPlugin';

const commands = [
  new Generate({
    message: 'Hello, World!'
  })
];
const buildIns = [new ExampleBuildInPlugin()];

export default [...commands, ...buildIns];
