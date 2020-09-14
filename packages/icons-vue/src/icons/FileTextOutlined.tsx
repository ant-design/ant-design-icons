// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileTextOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileTextOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileTextOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileTextOutlinedSvg}></AntdIcon>;
};

FileTextOutlined.displayName = 'FileTextOutlined';
FileTextOutlined.inheritAttrs = false;
export default FileTextOutlined;