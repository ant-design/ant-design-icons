export default function loadDefaultModuleFirst<M>(module: any): M {
  return module.default || module;
}
