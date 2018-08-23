module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        useBuiltIns: "usage",
        shippedProposals: true,
        targets: {
          browsers: [
            '> 1%',
            'last 2 versions',
            'not ie <= 8'
          ]
        }
      },
    ],
    [
      "@babel/preset-react",
      {
        useBuiltIns: true,
        pragma: "React.createElement",
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-runtime'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties']
  ],
}
