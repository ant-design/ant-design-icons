// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileWordFilledSvg from '@ant-design/icons-svg/lib/asn/FileWordFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileWordFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileWordFilled: FileWordFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileWordFilledSvg}></AntdIcon>;
};

FileWordFilled.displayName = 'FileWordFilled';
FileWordFilled.inheritAttrs = false;
export default FileWordFilled;