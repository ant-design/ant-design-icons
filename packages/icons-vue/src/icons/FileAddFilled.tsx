// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileAddFilledSvg from '@ant-design/icons-svg/lib/asn/FileAddFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileAddFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileAddFilled: FileAddFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileAddFilledSvg}></AntdIcon>;
};

FileAddFilled.displayName = 'FileAddFilled';
FileAddFilled.inheritAttrs = false;
export default FileAddFilled;