import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

register(new URL('./use-local-typescript-loader.mjs', import.meta.url), pathToFileURL('./'));
