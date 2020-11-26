// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileExcelOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileExcelOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileExcelOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileExcelOutlined: FileExcelOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileExcelOutlinedSvg}></AntdIcon>;
};

FileExcelOutlined.displayName = 'FileExcelOutlined';
FileExcelOutlined.inheritAttrs = false;
export default FileExcelOutlined;