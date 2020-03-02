# 贡献指南

`@ant-design/icons-svg` 是 Ant Design 官方所推出的语义化矢量图形库。该库提供了描述图标的抽象节点（Abstract Node, ASN）来满足各种框架的基本适配。

## 目录结构

```bash
.
├── ReadMe.md
├── babel.config.js     # 用于测试环境的 babel 配置
├── docs                # 项目文档
├── es                  # tsc 输出目录，使用 ES Modules
├── gulpfile.ts         # 用于整个图标生成的 gulp 配置文件
├── inline-svg          # gulp 输出目录，输出可直接使用的 SVG
├── jest.config.js
├── lib                 # tsc 输出目录，使用 CommonJS
├── package.json
├── plugins             # gulp 的插件目录，存放用于处理图标的自定义 gulp 插件
├── scripts             # 其他自定义的脚本文件
├── src                 # 源文件目录，该目录下的文件通常由 gulp 生成，然后通过 tsc 编译输出到 es、lib 目录
├── svg                 # 存放从设计师得到的，未经处理的图标文件
├── tasks               # gulp 的任务目录，存放用于处理图标的自定义 gulp 任务
├── templates           # 模板目录
├── test
├── tsconfig.build.json # 用于编译构建（build）的 TypeScript 配置
├── tsconfig.json       # 用于生成（generate）的（gulp 运行环境） TypeScript 配置
├── typings.d.ts
└── utils
```

## 生成流程

通过运行命令

```bash
yarn generate # or `yarn g`
```

开始 `gulp` 构建，整个构建流程如下

```txt
1. 清理之前生成、编译的文件
2. 并行运行下列任务
  2.1 直接拷贝部分代码至 src 目录，例如辅助函数 helpers.ts、类型定义 types.ts
  2.2 生成 filled 主题风格的图标抽象节点
  2.3 生成 outlined 主题风格的图标抽象节点
  2.4 生成 twotone 主题风格的图标抽象节点
3. 并行运行下列任务
  3.1 生成入口文件 index.ts
  3.2 生成内联图标 inline-svg
  3.3 生成包含名字空间的内联图标 inline-namespaced-svg
```

## 编译流程

通过运行命令

```bash
yarn build
```

使用 `tsc` 编译输出至 `es`、`lib` 目录
