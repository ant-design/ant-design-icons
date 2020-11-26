// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileAddOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileAddOutlined: FileAddOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileAddOutlinedSvg}></AntdIcon>;
};

FileAddOutlined.displayName = 'FileAddOutlined';
FileAddOutlined.inheritAttrs = false;
export default FileAddOutlined;