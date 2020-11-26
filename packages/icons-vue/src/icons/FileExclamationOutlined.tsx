// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileExclamationOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileExclamationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileExclamationOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileExclamationOutlined: FileExclamationOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileExclamationOutlinedSvg}></AntdIcon>;
};

FileExclamationOutlined.displayName = 'FileExclamationOutlined';
FileExclamationOutlined.inheritAttrs = false;
export default FileExclamationOutlined;