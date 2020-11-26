// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BellOutlinedSvg from '@ant-design/icons-svg/lib/asn/BellOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BellOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BellOutlined: BellOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BellOutlinedSvg}></AntdIcon>;
};

BellOutlined.displayName = 'BellOutlined';
BellOutlined.inheritAttrs = false;
export default BellOutlined;