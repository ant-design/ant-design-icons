# 貢献ガイド

`@ant-design/icons-svg` は、Ant Design 公式チームが推奨する SVG ライブラリです。さまざまな UI ライブラリやフレームワークで使用できる抽象ノード（基本的にはプレーンオブジェクト）を提供します。

## プロジェクト構造

```bash
.
├── ReadMe.md
├── babel.config.cjs      # jestで使用されるbabel設定
├── docs
├── es                    # TypeScriptコンパイラの出力ディレクトリ（--module esnext）
├── gulpfile.ts           # コアのgulp設定
├── inline-svg            # 処理されたアイコンが拡張子 ".svg" で出力されるディレクトリ
├── inline-namespaced-svg # 処理されたアイコンが拡張子 ".svg" で出力され、SVG名前空間（xmlns="http://www.w3.org/2000/svg"）を含むディレクトリ
├── jest.config.cjs
├── lib                   # TypeScriptコンパイラの出力ディレクトリ（--module commonjs）
├── package.json
├── plugins               # カスタムgulpプラグイン
├── scripts               # 一部のカスタムスクリプト
├── src                   # ソースディレクトリ。 "src" 内のすべてのファイルはgulpによって生成され、tscによってコンパイルされます
├── svg                   # 生のアイコンディレクトリ。ここにアイコンを追加できます。
├── tasks/creators        # gulpタスクファクトリ関数
├── templates             # 一部のテンプレート
├── test
├── tsconfig.build.json   # ビルド時のTypeScript設定
├── tsconfig.json         # "npm run generate" 実行時のランタイムTypeScript設定
├── typings.d.ts
└── utils
```

## 生成ワークフロー

次のコマンドを実行します

```bash
yarn generate # または `yarn g`
```

`gulp` ワークフローを開始します。以下のワークフローを参照してください。

```txt
1. 生成されたまたはコンパイルされたファイルをクリーンアップ（削除）します
2. 次のタスクを並行して実行します：
  2.1 一部のファイルを "src" ディレクトリにコピーします（例：helpers.ts、types.ts）
  2.2 "filled" テーマの抽象ノードを生成します
  2.3 "outlined" テーマの抽象ノードを生成します
  2.4 "twotone" テーマの抽象ノードを生成します
3. 次のタスクを並行して実行します：
  3.1 index.ts を生成します
  3.2 inline-svg ディレクトリを生成します
  3.3 inline-namespaced-svg ディレクトリを生成します
```

## ビルドワークフロー

次のコマンドを実行します

```bash
yarn build
```

`tsc` を使用してファイルを "src" から `es`、`lib` ディレクトリにコンパイルします。

## アイコンの追加/変更/削除方法

### アイコンの追加方法

アイコンが次のルールに従っていることを確認してください：

1. アイコンは [Ant Design 公式ライブラリサイト](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=9402) から取得するか、コミュニティから要求され、[Ant Design アイコンデザインルール](https://ant.design/docs/spec/icon) に適合している必要があります。

2. アイコンには `viewBox` 属性があり、その値は `0 0 1024 1024` である必要があります。

3. アイコンには `64px` の余白が必要です。

アイコンを `svg` ディレクトリ内のテーマ固有のフォルダ（`filled`、`outlined`、`twotone` のいずれか）に追加します。

ワークフローコマンドを実行します。

```bash
# ".ts" ファイルを "src" ディレクトリに生成します
yarn generate

# "src" ディレクトリ内のファイルをコンパイルします
yarn build
```

### アイコンの変更/削除方法

`svg` ディレクトリ内のアイコンを変更/削除し、ワークフローコマンドを実行します。

## gulpタスク

### アイコン生成タスク

```ts
generateIcons(options: GenerateIconsOptions): () => NodeJS.ReadWriteStream
```

このタスクは、特定のディレクトリ内のすべての `.svg` ファイルを `svgo` を使用して圧縮し、抽象ノードに変換します。

`GenerateIconsOptions`：

```ts
// gulpfile.ts

generateIcons({
  // アイコンテーマを設定します
  theme: 'filled',

  // ソース
  from: ['svg/filled/*.svg'],

  // 出力ディレクトリ
  toDir: 'src/asn',

  // プラグインSVGOの設定
  svgoConfig: generalConfig,

  // 変換関数のコレクション。詳細は以下を参照してください
  extraNodeTransformFactories: [
    assignAttrsAtTag('svg', { focusable: 'false' }),
    adjustViewBox
  ],

  // テンプレートを適用する前の抽象ノードのシリアル化操作。詳細は以下を参照してください
  stringify: JSON.stringify,

  // テンプレート
  template: iconTemplate,

  // テンプレート内の補間マッピング
  mapToInterpolate: ({ name, content }) => ({
    identifier: getIdentifier({ name, themeSuffix: 'Filled' }),
    content
  }),

  // 出力ファイル名
  filename: ({ name }) => getIdentifier({ name, themeSuffix: 'Filled' })
});
```

#### extraNodeTransformFactories

これは、各抽象ノードを処理する関数を含む配列です。

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

現在の `gulpfile.ts` の設定は次のとおりです。

```ts
extraNodeTransformFactories: [
  assignAttrsAtTag('svg', { focusable: 'false' }),
  adjustViewBox
]
```

`assignAttrsAtTag('svg', { focusable: 'false' })`

各 `svg` ノード（`svg` XMLタグ）に対して、キーと値のペアを属性に割り当てます。例：`focusable="false"`

`adjustViewBox`

これは、アイコンのビュー ボックスを調整し、余白領域を削除します。 (`viewBox="64 64 896 896"`)

```ts
const adjustViewBox: TransformFactory = assignAttrsAtTag('svg', ({ name }) => ({
  viewBox: includes(name, OLD_ICON_NAMES) ? '0 0 1024 1024' : '64 64 896 896'
}));
```

`assignAttrsAtTag` は、ノードに追加の属性を追加するのに役立つヘルプ関数であることに注意してください。

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

#### 例：すべての `path` タグに `hello="world"` を追加

```ts
extraNodeTransformFactories: [
  assignAttrsAtTag('path', { hello: 'world'})
]
```

結果は次のとおりです

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

#### 例: テーマ、名前、さらにはアイコンの以前の属性にアクセスする

```ts
extraNodeTransformFactories: [
  assignAttrsAtTag('path', ({ name, theme, previousAttrs }) => ({
    hello: `${name}-${theme}-${previousAttrs.d}`
  }))
]
```

結果は次のとおりです

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
