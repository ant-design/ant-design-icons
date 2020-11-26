// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FallOutlinedSvg from '@ant-design/icons-svg/lib/asn/FallOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FallOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FallOutlined: FallOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FallOutlinedSvg}></AntdIcon>;
};

FallOutlined.displayName = 'FallOutlined';
FallOutlined.inheritAttrs = false;
export default FallOutlined;