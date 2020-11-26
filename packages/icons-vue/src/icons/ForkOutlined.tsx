// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForkOutlinedSvg from '@ant-design/icons-svg/lib/asn/ForkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForkOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForkOutlined: ForkOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForkOutlinedSvg}></AntdIcon>;
};

ForkOutlined.displayName = 'ForkOutlined';
ForkOutlined.inheritAttrs = false;
export default ForkOutlined;