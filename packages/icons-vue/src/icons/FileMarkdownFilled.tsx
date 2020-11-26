// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileMarkdownFilledSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileMarkdownFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileMarkdownFilled: FileMarkdownFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileMarkdownFilledSvg}></AntdIcon>;
};

FileMarkdownFilled.displayName = 'FileMarkdownFilled';
FileMarkdownFilled.inheritAttrs = false;
export default FileMarkdownFilled;