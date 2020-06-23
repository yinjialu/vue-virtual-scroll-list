import ProductionConfig from './rollup.production'

// development mode just rewrite from production config.
export default Object.assign({}, ProductionConfig, {
  output: {
    ...ProductionConfig.output,
    file: './dist/index.js',
    sourcemap: true,
    banner: '/* eslint-disable */' // disable eslint when bundle with docs.
  }
})
