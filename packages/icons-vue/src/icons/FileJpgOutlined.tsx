// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileJpgOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileJpgOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileJpgOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileJpgOutlined: FileJpgOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileJpgOutlinedSvg}></AntdIcon>;
};

FileJpgOutlined.displayName = 'FileJpgOutlined';
FileJpgOutlined.inheritAttrs = false;
export default FileJpgOutlined;