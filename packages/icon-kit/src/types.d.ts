import PluginAPI from './PluginAPI';
import KitService from './Service';
import { Observable } from 'rxjs';
import { ParsedPath } from 'path';

export interface CwdNeeded {
  cwd: string;
}

export interface ResolvePluginsArgs extends CwdNeeded {
  plugins: KitPlugin[];
}

export interface KitPlugin<O = any> {
  namespace: string;
  options?: O;
  apply: (api: ProxyPluginAPI, options?: O) => void;
}

export interface KitProcessor {
  namespace: string;
  options?: object;
  transform: (asset: Asset) => Promise<Asset>;
}

export interface ProxyPluginAPI extends PluginAPI {
  config: typeof KitService.prototype.config;
  registerCommand: typeof KitService.prototype.registerCommand;
  registerPlugin: typeof KitService.prototype.registerPlugin;
  asyncHooks: typeof KitService.prototype.asyncHooks;
  syncHooks: typeof KitService.prototype.syncHooks;
  assets$: typeof KitService.prototype.assets$;
  extraAssets$: typeof KitService.prototype.extraAssets$;
  writeAsset: typeof KitService.prototype.writeAsset;
}

export interface KitConfig {
  name: string;
  context?: string;
  sources: string[];
  relativeBase?: string;
  flow?: (KitProcessor | null)[];
  destination: string;
  plugins?: KitPlugin[];
}

export interface KitFullConfig extends KitConfig {
  context: string;
  flow: (KitProcessor | null)[];
  plugins: KitPlugin[];
}

export interface AssetPath extends ParsedPath {
  absolute: string;
}

export interface UnensuredAsset {
  from: AssetPath;
  to?: AssetPath;
  content: string;
}

export interface Asset extends ExtraAsset, UnensuredAsset {
  from: AssetPath;
  to: AssetPath;
  content: string;
}

export interface ExtraAsset {
  from?: AssetPath;
  to: AssetPath;
  content: string;
}
