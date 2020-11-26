// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileMarkdownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileMarkdownTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileMarkdownTwoTone: FileMarkdownTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileMarkdownTwoToneSvg}></AntdIcon>;
};

FileMarkdownTwoTone.displayName = 'FileMarkdownTwoTone';
FileMarkdownTwoTone.inheritAttrs = false;
export default FileMarkdownTwoTone;