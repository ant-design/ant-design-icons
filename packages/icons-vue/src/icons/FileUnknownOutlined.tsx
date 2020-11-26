// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileUnknownOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileUnknownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileUnknownOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileUnknownOutlined: FileUnknownOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileUnknownOutlinedSvg}></AntdIcon>;
};

FileUnknownOutlined.displayName = 'FileUnknownOutlined';
FileUnknownOutlined.inheritAttrs = false;
export default FileUnknownOutlined;