// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileMarkdownOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileMarkdownOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileMarkdownOutlined: FileMarkdownOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileMarkdownOutlinedSvg}></AntdIcon>;
};

FileMarkdownOutlined.displayName = 'FileMarkdownOutlined';
FileMarkdownOutlined.inheritAttrs = false;
export default FileMarkdownOutlined;