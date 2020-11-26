// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RotateRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateRightOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateRightOutlined: RotateRightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateRightOutlinedSvg}></AntdIcon>;
};

RotateRightOutlined.displayName = 'RotateRightOutlined';
RotateRightOutlined.inheritAttrs = false;
export default RotateRightOutlined;