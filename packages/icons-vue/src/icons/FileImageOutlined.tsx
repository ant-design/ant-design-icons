// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileImageOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileImageOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileImageOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileImageOutlined: FileImageOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileImageOutlinedSvg}></AntdIcon>;
};

FileImageOutlined.displayName = 'FileImageOutlined';
FileImageOutlined.inheritAttrs = false;
export default FileImageOutlined;