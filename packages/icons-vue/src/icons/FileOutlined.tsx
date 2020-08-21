// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileOutlinedSvg}></AntdIcon>;
};

FileOutlined.displayName = 'FileOutlined';
FileOutlined.inheritAttrs = false;
export default FileOutlined;