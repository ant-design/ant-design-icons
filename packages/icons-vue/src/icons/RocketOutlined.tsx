// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RocketOutlinedSvg from '@ant-design/icons-svg/lib/asn/RocketOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RocketOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RocketOutlined: RocketOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RocketOutlinedSvg}></AntdIcon>;
};

RocketOutlined.displayName = 'RocketOutlined';
RocketOutlined.inheritAttrs = false;
export default RocketOutlined;