// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileTextFilledSvg from '@ant-design/icons-svg/lib/asn/FileTextFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileTextFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileTextFilled: FileTextFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileTextFilledSvg}></AntdIcon>;
};

FileTextFilled.displayName = 'FileTextFilled';
FileTextFilled.inheritAttrs = false;
export default FileTextFilled;