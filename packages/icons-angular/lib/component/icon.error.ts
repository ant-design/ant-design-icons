import { error, ANT_ICON_ANGULAR_CONSOLE_PREFIX } from '../utils';

export function NameSpaceIsNotSpecifyError(): Error {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}Type should have a namespace. Try "namespace:${name}".`);
}

export function IconNotFoundError(icon: string): Error {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}the icon ${icon} does not exist or is not registered.`);
}

export function HttpModuleNotImport(): null {
  error(`you need to import "HttpClientModule" to use dynamic importing.`);
  return null;
}

export function UrlNotSafeError(url: string): Error {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}The url "${url}" is unsafe.`);
}

export function SVGTagNotFoundError(): Error {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}<svg> tag not found.`);
}

export function DynamicLoadingTimeoutError(): Error {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}Importing timeout error.`);
}
