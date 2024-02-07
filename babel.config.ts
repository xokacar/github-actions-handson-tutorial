import { ConfigFunction } from '@babel/core';

const babelConfig: ConfigFunction = (api) => {
  const presets = [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ];

  return {
    presets,
  };
};

export default babelConfig;
