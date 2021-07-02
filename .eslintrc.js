module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // plugin: 名称 对应 plugin中的插件， 这里的规则集是插件内部
    // 后面的规则集会覆盖前面的规则集
    'eslint:recommended', // 启用当前安装 eslint 的所有的核心规则
    'plugin:react/recommended', // 启用 react 插件中的推荐的规则
    'plugin:@typescript-eslint/recommended', // 启用 @typescript-eslint 插件中的推荐的规则
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  // plugins 中的规则默认是不开启的 需要配合 rules 或 extends 使用
  // 在 rules 中需要一个个写入开启
  // 每一个插件中会有多种规则集 可以在extends 中开启对应的规则集
  plugins: [
    'react',
    '@typescript-eslint', // 为typescript代码块提供 lint 规则
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
