import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'intelligence',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
