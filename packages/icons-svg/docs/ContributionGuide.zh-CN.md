# 贡献指南

`@ant-design/icons-svg` 是 Ant Design 官方所推出的语义化矢量图形库。该库提供了描述图标的抽象节点（Abstract Node, ASN）来满足各种框架的基本适配。

## 目录结构

```bash
.
├── ReadMe.md
├── babel.config.cjs      # 用于测试环境的 babel 配置
├── docs                  # 项目文档
├── es                    # tsc 输出目录，使用 ES Modules
├── gulpfile.ts           # 用于整个图标生成的 gulp 配置文件
├── inline-svg            # gulp 输出目录，输出可直接使用的 SVG
├── inline-namespaced-svg # gulp 输出目录，输出可直接使用的 SVG
├── jest.config.cjs
├── lib                   # tsc 输出目录，使用 CommonJS
├── package.json
├── plugins               # gulp 的插件目录，存放用于处理图标的自定义 gulp 插件
├── scripts               # 其他自定义的脚本文件
├── src                   # 源文件目录，该目录下的文件通常由 gulp 生成，然后通过 tsc 编译输出到 es、lib 目录
├── svg                   # 存放从设计师得到的，未经处理的图标文件
├── tasks/creators        # gulp 的任务工厂函数目录，存放用于处理图标的自定义 gulp 任务工厂函数
├── templates             # 模板目录
├── test
├── tsconfig.build.json   # 用于编译构建（build）的 TypeScript 配置
├── tsconfig.json         # 用于生成（generate）的（gulp 运行环境） TypeScript 配置
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

## 如何新增/修改/删除图标

### 新增

首先确保图标符合以下设计上的要求：

1. 图标来自 [Ant Design 官方图标库](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=9402)，或者社区请愿并符合 `Ant Design` [设计规格](https://ant.design/docs/spec/icon-cn#%E8%AE%BE%E8%AE%A1%E8%A7%84%E6%A0%BC)的图标

2. 图标的 `viewBox` 为 `0 0 1024 1024`

3. 图标外围有预留 `64px` 的出血位

然后将需要新增的图标添加至 `svg` 目录下对应的主题风格目录中，即 `filled`, `outlined`, `twotone` 中的一个

运行目录下的 `npm scripts`

```bash
# 生成 ts 源文件至 src
yarn generate

# 编译 src 文件至 es、lib
yarn build
```

### 修改/删除

修改和删除跟新增图标类似，直接修改/删除 `svg` 目录下对应主题风格目录中的 `.svg` 图标即可

## gulp 任务

### 生成图标任务

```ts
generateIcons(options: GenerateIconsOptions): () => NodeJS.ReadWriteStream
```

该任务将指定目录下的 `.svg` 文件，使用 `svgo` 进行图标压缩，然后将压缩后的图标解析成抽象节点。

配置说明如下：

```ts
// gulpfile.ts

generateIcons({
  // 告知生成图标的主题风格
  theme: 'filled',

  // 图标来源
  from: ['svg/filled/*.svg'],

  // 输出目录
  toDir: 'src/asn',

  // 图标压缩插件 svgo 的配置
  svgoConfig: generalConfig,

  // 对节点的额外转换，详细说明见下
  extraNodeTransformFactories: [
    assignAttrsAtTag('svg', { focusable: 'false' }),
    adjustViewBox
  ],

  // 在套用模板前，对抽象节点的序列化操作，详细说明见下
  stringify: JSON.stringify,

  // 套用的模板
  template: iconTemplate,

  // 模板中的插值映射
  mapToInterpolate: ({ name, content }) => ({
    identifier: getIdentifier({ name, themeSuffix: 'Filled' }),
    content
  }),

  // 最后输出文件命名
  filename: ({ name }) => getIdentifier({ name, themeSuffix: 'Filled' })
});
```

#### extraNodeTransformFactories

是一个包含对节点进行额外处理的工厂函数数组 `TransformFactory[]` ，相关类型定义如下：

```ts
interface TransformFactory {
  (options: TransformOptions): (asn: AbstractNode) => AbstractNode;
}

type TransformOptions = {
  name: string;
  theme: ThemeType;
};

interface AbstractNode {
  tag: string;
  attrs: {
    [key: string]: string;
  };
  children?: AbstractNode[];
}
```

在当前的 `gulpfile.ts` 中的相关配置如下：

```ts
extraNodeTransformFactories: [
  assignAttrsAtTag('svg', { focusable: 'false' }),
  adjustViewBox
]
```

中的两个工厂函数的作用分别是：

`assignAttrsAtTag('svg', { focusable: 'false' })`

对所有类型为 `svg` 的节点（即 `svg` 标签），赋值添加 `focusable="false"` 属性

`adjustViewBox`

本质是将 `antd@3.9` 之后的图标的 `viewBox` 调整为 `viewBox="64 64 896 896"` (移除 64px 设计时出血位)

```ts
const adjustViewBox: TransformFactory = assignAttrsAtTag('svg', ({ name }) => ({
  viewBox: includes(name, OLD_ICON_NAMES) ? '0 0 1024 1024' : '64 64 896 896'
}));
```

其中 `assignAttrsAtTag` 是一个帮助对节点添加额外属性的辅助函数，类型如下

```ts
function assignAttrsAtTag(
  tag: string,
  extraPropsOrFn:
    | Dictionary
    | ((
        options: TransformOptions & { previousAttrs: Dictionary }
      ) => Dictionary)
): TransformFactory;

type Dictionary = Record<string, string>;
```

#### 示例用法：给所有 `svg` 图标的 `path` 标签添加 `hello="world"`

```ts
extraNodeTransformFactories: [
  assignAttrsAtTag('path', { hello: 'world'})
]
```

结果如下

```ts
// src/asn/AccountBookFilled.ts

const AccountBookFilled: IconDefinition = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zM648.3 426.8l-87.7 161.1h45.7c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4v29.7h63.4c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4V752c0 5.5-4.5 10-10 10h-41.3c-5.5 0-10-4.5-10-10v-51.8h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h63.1v-29.7h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h45.2l-88-161.1c-2.6-4.8-.9-10.9 4-13.6 1.5-.8 3.1-1.2 4.8-1.2h46c3.8 0 7.2 2.1 8.9 5.5l72.9 144.3 73.2-144.3a10 10 0 018.9-5.5h45c5.5 0 10 4.5 10 10 .1 1.7-.3 3.3-1.1 4.8z',
          hello: 'world'
        }
      }
    ]
  },
  name: 'account-book',
  theme: 'filled'
};
```

#### 示例用法：传入函数作为参数访问到主题、名字，甚至原来属性等字段

```ts
extraNodeTransformFactories: [
  assignAttrsAtTag('path', ({ name, theme, previousAttrs }) => ({
    hello: `${name}-${theme}-${previousAttrs.d}`
  }))
]
```

结果如下

```ts
// src/asn/AccountBookFilled.ts

const AccountBookFilled: IconDefinition = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zM648.3 426.8l-87.7 161.1h45.7c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4v29.7h63.4c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4V752c0 5.5-4.5 10-10 10h-41.3c-5.5 0-10-4.5-10-10v-51.8h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h63.1v-29.7h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h45.2l-88-161.1c-2.6-4.8-.9-10.9 4-13.6 1.5-.8 3.1-1.2 4.8-1.2h46c3.8 0 7.2 2.1 8.9 5.5l72.9 144.3 73.2-144.3a10 10 0 018.9-5.5h45c5.5 0 10 4.5 10 10 .1 1.7-.3 3.3-1.1 4.8z',
          hello:
            'account-book-filled-M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zM648.3 426.8l-87.7 161.1h45.7c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4v29.7h63.4c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4V752c0 5.5-4.5 10-10 10h-41.3c-5.5 0-10-4.5-10-10v-51.8h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h63.1v-29.7h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h45.2l-88-161.1c-2.6-4.8-.9-10.9 4-13.6 1.5-.8 3.1-1.2 4.8-1.2h46c3.8 0 7.2 2.1 8.9 5.5l72.9 144.3 73.2-144.3a10 10 0 018.9-5.5h45c5.5 0 10 4.5 10 10 .1 1.7-.3 3.3-1.1 4.8z'
        }
      }
    ]
  },
  name: 'account-book',
  theme: 'filled'
};
```
