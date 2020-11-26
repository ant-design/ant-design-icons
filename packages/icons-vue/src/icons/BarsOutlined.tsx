// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BarsOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BarsOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BarsOutlined: BarsOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarsOutlinedSvg}></AntdIcon>;
};

BarsOutlined.displayName = 'BarsOutlined';
BarsOutlined.inheritAttrs = false;
export default BarsOutlined;