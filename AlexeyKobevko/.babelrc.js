const isProduction = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

module.exports = {
  "presets": ["@babel/preset-typescript"],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties"],
    [
      'styled-components',
      {
        displayName: !isProduction && !isTest,
        minify: isProduction,
      },
    ],
    [
      "module-resolver",
      {
        "root": ["./"],
        "alias": {
          "@app": "./src",
          "@components": "./src/components",
          "@theme": "./theme",
          "@types": "./types",
        },
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    ],
  ].filter(Boolean),
};