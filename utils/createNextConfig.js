const CircularDependencyPlugin = require('circular-dependency-plugin')
const merge = require('lodash/merge')

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  transpilePackages: ['@menta/core', '@menta/ui'],
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.plugins.push(
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        include: /app/,
        failOnError: true,
        allowAsyncCycles: false,
        cwd: process.cwd(),
      })
    )

    return config
  },
}

/**
 * @param {Partial<import('next').NextConfig>} overrides
 * @returns {import('next').NextConfig}
 */
module.exports = (overrides) => {
  return merge(baseConfig, overrides)
}
