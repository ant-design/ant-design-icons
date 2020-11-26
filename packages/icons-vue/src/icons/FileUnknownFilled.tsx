// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileUnknownFilledSvg from '@ant-design/icons-svg/lib/asn/FileUnknownFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileUnknownFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileUnknownFilled: FileUnknownFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileUnknownFilledSvg}></AntdIcon>;
};

FileUnknownFilled.displayName = 'FileUnknownFilled';
FileUnknownFilled.inheritAttrs = false;
export default FileUnknownFilled;