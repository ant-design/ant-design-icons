// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileZipFilledSvg from '@ant-design/icons-svg/lib/asn/FileZipFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileZipFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileZipFilled: FileZipFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileZipFilledSvg}></AntdIcon>;
};

FileZipFilled.displayName = 'FileZipFilled';
FileZipFilled.inheritAttrs = false;
export default FileZipFilled;