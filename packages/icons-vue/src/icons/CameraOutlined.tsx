// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CameraOutlinedSvg from '@ant-design/icons-svg/lib/asn/CameraOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CameraOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraOutlinedSvg}></AntdIcon>;
};

CameraOutlined.displayName = 'CameraOutlined';
CameraOutlined.inheritAttrs = false;
export default CameraOutlined;