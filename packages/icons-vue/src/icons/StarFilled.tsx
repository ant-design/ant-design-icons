// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StarFilledSvg from '@ant-design/icons-svg/lib/asn/StarFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StarFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StarFilled: StarFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarFilledSvg}></AntdIcon>;
};

StarFilled.displayName = 'StarFilled';
StarFilled.inheritAttrs = false;
export default StarFilled;