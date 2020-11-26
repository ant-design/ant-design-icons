// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartFilledSvg from '@ant-design/icons-svg/lib/asn/HeartFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartFilled: HeartFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartFilledSvg}></AntdIcon>;
};

HeartFilled.displayName = 'HeartFilled';
HeartFilled.inheritAttrs = false;
export default HeartFilled;