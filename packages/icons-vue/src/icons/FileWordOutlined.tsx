// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileWordOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileWordOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileWordOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileWordOutlined: FileWordOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileWordOutlinedSvg}></AntdIcon>;
};

FileWordOutlined.displayName = 'FileWordOutlined';
FileWordOutlined.inheritAttrs = false;
export default FileWordOutlined;