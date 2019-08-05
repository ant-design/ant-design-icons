export default function loadDefaultModuleFirst(module) {
  return module.default || module;
}