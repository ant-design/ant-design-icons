// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileOutlined: FileOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileOutlinedSvg}></AntdIcon>;
};

FileOutlined.displayName = 'FileOutlined';
FileOutlined.inheritAttrs = false;
export default FileOutlined;