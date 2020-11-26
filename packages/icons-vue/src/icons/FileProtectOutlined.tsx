// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileProtectOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileProtectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileProtectOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileProtectOutlined: FileProtectOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileProtectOutlinedSvg}></AntdIcon>;
};

FileProtectOutlined.displayName = 'FileProtectOutlined';
FileProtectOutlined.inheritAttrs = false;
export default FileProtectOutlined;