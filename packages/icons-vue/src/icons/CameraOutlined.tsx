// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CameraOutlinedSvg from '@ant-design/icons-svg/lib/asn/CameraOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CameraOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CameraOutlined: CameraOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraOutlinedSvg}></AntdIcon>;
};

CameraOutlined.displayName = 'CameraOutlined';
CameraOutlined.inheritAttrs = false;
export default CameraOutlined;