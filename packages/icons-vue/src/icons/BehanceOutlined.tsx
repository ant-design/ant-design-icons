// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BehanceOutlinedSvg from '@ant-design/icons-svg/lib/asn/BehanceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BehanceOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BehanceOutlined: BehanceOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BehanceOutlinedSvg}></AntdIcon>;
};

BehanceOutlined.displayName = 'BehanceOutlined';
BehanceOutlined.inheritAttrs = false;
export default BehanceOutlined;