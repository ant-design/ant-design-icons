import { resolve } from 'path';
import { KitConfig } from '@ant-design/icon-kit';
import SVGOProcessor from './build/processors/SVGOProcessor';
import { twoToneSVGOConfig, singleColorSVGOConfig } from './build/svgo.config';
import XMLProcessor, { AbstractNode } from './build/processors/XMLProcessor';
import TemplateProcessor from './build/processors/TemplateProcessor';
import PrettierProcessor from './build/processors/PrettierProcessor';
import RenameIconByThemePlugin from './build/plugins/RenameIconByThemePlugin';
import TwoToneColorExtractProcessor from './build/processors/TwoToneColorExtractProcessor';
import GenerateFilesPlugin from './build/plugins/GenerateFilesPlugin';
import GenerateIconListPlugin from './build/plugins/GenerateIconListPlugin';
import { getIdentifierAccordingToNameAndDir } from './build/utils';
import GenerateInlineSVGPlugin from './build/plugins/GenerateInlineSVGPlugin';
import GenerateIndexPlugin from './build/plugins/GenerateIndexPlugin';

export default [
  {
    name: 'generate-fill-and-outline-icons',
    context: __dirname,
    sources: ['./svg/fill/*.svg', './svg/outline/*.svg'],
    relativeBase: './svg',
    flow: [
      new SVGOProcessor({
        svgo: singleColorSVGOConfig
      }),
      new XMLProcessor({
        shape: 'icon-definition'
      }),
      new TemplateProcessor({
        tplSrc: resolve(__dirname, './build/templates/icon.ts.ejs'),
        mapAssetPropsToInterpolate: ({ from, content }) => ({
          identifier: getIdentifierAccordingToNameAndDir(from),
          content
        })
      }),
      !process.env.KIT_FAST_GENERATE
        ? new PrettierProcessor({
            prettier: { parser: 'typescript', singleQuote: true }
          })
        : null
    ],
    destination: resolve(__dirname, './src/asn'),
    plugins: [
      new RenameIconByThemePlugin({ ext: '.ts' }),
      new GenerateInlineSVGPlugin({
        destination: resolve(__dirname, './inline-svg'),
        objectLikeSourceProcessorName: 'xml-processor'
      })
    ]
  },
  {
    name: 'generate-twotone-icons',
    context: __dirname,
    sources: ['./svg/twotone/*.svg'],
    relativeBase: './svg',
    flow: [
      new SVGOProcessor({
        svgo: twoToneSVGOConfig
      }),
      new XMLProcessor({
        shape: 'icon-definition',
        extraNodeTransforms: [
          (node: AbstractNode) => {
            if (node.tag === 'path') {
              node.attrs.fill = node.attrs.fill || '#333';
            }
            return node;
          }
        ]
      }),
      new TwoToneColorExtractProcessor({
        primaryColors: ['#333'],
        secondaryColors: ['#E6E6E6', '#D9D9D9', '#D8D8D8']
      }),
      new TemplateProcessor({
        tplSrc: resolve(__dirname, './build/templates/icon.ts.ejs'),
        mapAssetPropsToInterpolate: ({ from, content }) => ({
          identifier: getIdentifierAccordingToNameAndDir(from),
          content
        })
      }),
      !process.env.KIT_FAST_GENERATE
        ? new PrettierProcessor({
            prettier: { parser: 'typescript', singleQuote: true }
          })
        : null
    ],
    destination: resolve(__dirname, './src/asn'),
    plugins: [
      new RenameIconByThemePlugin({ ext: '.ts' }),
      new GenerateInlineSVGPlugin({
        destination: resolve(__dirname, './inline-svg'),
        objectLikeSourceProcessorName: 'xml-processor'
      })
    ]
  },
  {
    name: 'generate-list-and-index-and-types',
    context: __dirname,
    sources: ['./svg/**/*.svg'],
    plugins: [
      new GenerateIconListPlugin({
        template: resolve(__dirname, './build/templates/icons-list.md'),
        output: resolve(__dirname, './docs/list.md')
      }),
      new GenerateFilesPlugin([
        {
          dataSource: resolve(__dirname, './build/templates/types.ts'),
          output: resolve(__dirname, './src/types.ts')
        }
      ]),
      new GenerateIndexPlugin({
        template: resolve(__dirname, './build/templates/index.ts.ejs'),
        output: resolve(__dirname, './src/index.ts'),
        literalFromPath: './asn/[identifier]'
      })
    ]
  }
] as KitConfig[];
