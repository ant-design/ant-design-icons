// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RiseOutlinedSvg from '@ant-design/icons-svg/lib/asn/RiseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RiseOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RiseOutlined: RiseOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RiseOutlinedSvg}></AntdIcon>;
};

RiseOutlined.displayName = 'RiseOutlined';
RiseOutlined.inheritAttrs = false;
export default RiseOutlined;