// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileZipOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileZipOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileZipOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileZipOutlined: FileZipOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileZipOutlinedSvg}></AntdIcon>;
};

FileZipOutlined.displayName = 'FileZipOutlined';
FileZipOutlined.inheritAttrs = false;
export default FileZipOutlined;