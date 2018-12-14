import { antIconConsolePrefix, printErr } from '../utils';

export function NameSpaceIsNotSpecifyError(): Error {
  return new Error(`${antIconConsolePrefix}Type should have a namespace. Try "namespace:${name}".`);
}

export function IconNotFoundError(icon: string): Error {
  return new Error(`${antIconConsolePrefix}the icon ${icon} does not exist or is not registered.`);
}

export function HttpModuleNotImport(): null {
  printErr(`you need to import "HttpClientModule" to use dynamic importing`);
  return null;
}

export function UrlNotSafeError(url: string): Error {
  return new Error(`${antIconConsolePrefix}The url "${url}" is unsafe.`);
}

export function SVGTagNotFoundError(): Error {
  return new Error(`${antIconConsolePrefix}<svg> tag not found`);
}
