import yParser from 'yargs-parser';
import KitService from '../Service';
import resolveUserConfig from '../resolvers/resolveUserConfig';
import signale from 'signale';
import { KitConfig } from '../types';

const args = yParser(process.argv.slice(2));

export async function generate(configOrConfigs: KitConfig | KitConfig[]) {
  // Success
  // Multi
  if (Array.isArray(configOrConfigs)) {
    signale.success(
      `Resolve ${configOrConfigs.length} config(s) successfully.`
    );
    for (const config of configOrConfigs) {
      await new KitService(config).run('generate', args);
    }
    return;
  }
  // Single
  signale.success(`Resolve config successfully.`);
  return new KitService(configOrConfigs).run('generate', args);
}

(async () => {
  const configOrConfigs = await resolveUserConfig({ cwd: process.cwd() });
  // Failure
  if (!configOrConfigs) {
    signale.fatal(`Failed to resolve config(s).`);
    return;
  }
  await generate(configOrConfigs);
})();
