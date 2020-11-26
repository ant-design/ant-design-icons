// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CameraFilledSvg from '@ant-design/icons-svg/lib/asn/CameraFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CameraFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CameraFilled: CameraFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraFilledSvg}></AntdIcon>;
};

CameraFilled.displayName = 'CameraFilled';
CameraFilled.inheritAttrs = false;
export default CameraFilled;