import yParser from 'yargs-parser';
import KitService from '../Service';
import resolveUserConfig from '../resolvers/resolveUserConfig';
import signale from 'signale';

const args = yParser(process.argv.slice(3));

(async () => {
  const configOrConfigs = await resolveUserConfig({ cwd: process.cwd() });

  // Failure
  if (!configOrConfigs) {
    signale.fatal(`Failed to resolve config(s).`);
    return;
  }

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
  await new KitService(configOrConfigs).run('generate', args);
})();
