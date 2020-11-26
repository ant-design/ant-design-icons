// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileExclamationTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileExclamationTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileExclamationTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileExclamationTwoTone: FileExclamationTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileExclamationTwoToneSvg}></AntdIcon>;
};

FileExclamationTwoTone.displayName = 'FileExclamationTwoTone';
FileExclamationTwoTone.inheritAttrs = false;
export default FileExclamationTwoTone;