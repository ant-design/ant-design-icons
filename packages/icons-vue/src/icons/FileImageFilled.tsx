// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileImageFilledSvg from '@ant-design/icons-svg/lib/asn/FileImageFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileImageFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileImageFilled: FileImageFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileImageFilledSvg}></AntdIcon>;
};

FileImageFilled.displayName = 'FileImageFilled';
FileImageFilled.inheritAttrs = false;
export default FileImageFilled;