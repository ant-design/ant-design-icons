// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileTextOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileTextOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileTextOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileTextOutlined: FileTextOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileTextOutlinedSvg}></AntdIcon>;
};

FileTextOutlined.displayName = 'FileTextOutlined';
FileTextOutlined.inheritAttrs = false;
export default FileTextOutlined;