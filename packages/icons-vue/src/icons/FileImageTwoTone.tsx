// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileImageTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileImageTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileImageTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileImageTwoTone: FileImageTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileImageTwoToneSvg}></AntdIcon>;
};

FileImageTwoTone.displayName = 'FileImageTwoTone';
FileImageTwoTone.inheritAttrs = false;
export default FileImageTwoTone;