// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileSearchOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileSearchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileSearchOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileSearchOutlined: FileSearchOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileSearchOutlinedSvg}></AntdIcon>;
};

FileSearchOutlined.displayName = 'FileSearchOutlined';
FileSearchOutlined.inheritAttrs = false;
export default FileSearchOutlined;