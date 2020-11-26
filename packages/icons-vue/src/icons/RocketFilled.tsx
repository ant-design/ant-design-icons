// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RocketFilledSvg from '@ant-design/icons-svg/lib/asn/RocketFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RocketFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RocketFilled: RocketFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RocketFilledSvg}></AntdIcon>;
};

RocketFilled.displayName = 'RocketFilled';
RocketFilled.inheritAttrs = false;
export default RocketFilled;