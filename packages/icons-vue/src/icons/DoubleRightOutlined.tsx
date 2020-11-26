// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DoubleRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/DoubleRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DoubleRightOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DoubleRightOutlined: DoubleRightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DoubleRightOutlinedSvg}></AntdIcon>;
};

DoubleRightOutlined.displayName = 'DoubleRightOutlined';
DoubleRightOutlined.inheritAttrs = false;
export default DoubleRightOutlined;