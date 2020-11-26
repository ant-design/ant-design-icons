// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileZipTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileZipTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileZipTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileZipTwoTone: FileZipTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileZipTwoToneSvg}></AntdIcon>;
};

FileZipTwoTone.displayName = 'FileZipTwoTone';
FileZipTwoTone.inheritAttrs = false;
export default FileZipTwoTone;