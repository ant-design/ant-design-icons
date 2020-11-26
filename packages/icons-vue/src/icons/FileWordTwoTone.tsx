// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileWordTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileWordTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileWordTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileWordTwoTone: FileWordTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileWordTwoToneSvg}></AntdIcon>;
};

FileWordTwoTone.displayName = 'FileWordTwoTone';
FileWordTwoTone.inheritAttrs = false;
export default FileWordTwoTone;