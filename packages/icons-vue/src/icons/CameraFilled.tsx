// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CameraFilledSvg from '@ant-design/icons-svg/lib/asn/CameraFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CameraFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraFilledSvg}></AntdIcon>;
};

CameraFilled.displayName = 'CameraFilled';
CameraFilled.inheritAttrs = false;
export default CameraFilled;