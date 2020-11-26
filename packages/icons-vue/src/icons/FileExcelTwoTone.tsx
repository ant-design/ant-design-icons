// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileExcelTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileExcelTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileExcelTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileExcelTwoTone: FileExcelTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileExcelTwoToneSvg}></AntdIcon>;
};

FileExcelTwoTone.displayName = 'FileExcelTwoTone';
FileExcelTwoTone.inheritAttrs = false;
export default FileExcelTwoTone;