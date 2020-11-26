// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileExcelFilledSvg from '@ant-design/icons-svg/lib/asn/FileExcelFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileExcelFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileExcelFilled: FileExcelFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileExcelFilledSvg}></AntdIcon>;
};

FileExcelFilled.displayName = 'FileExcelFilled';
FileExcelFilled.inheritAttrs = false;
export default FileExcelFilled;