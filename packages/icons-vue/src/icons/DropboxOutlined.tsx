// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DropboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/DropboxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DropboxOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DropboxOutlinedSvg}></AntdIcon>;
};

DropboxOutlined.displayName = 'DropboxOutlined';
DropboxOutlined.inheritAttrs = false;
export default DropboxOutlined;