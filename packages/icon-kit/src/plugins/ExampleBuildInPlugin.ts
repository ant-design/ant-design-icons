import { KitPlugin } from '../types';

export default class ExampleBuildInPlugin implements KitPlugin {
  namespace = 'example-build-in';
  apply(api: any) {
    // console.log(api);
  }
}
