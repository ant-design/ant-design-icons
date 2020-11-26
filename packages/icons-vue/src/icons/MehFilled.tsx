// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MehFilledSvg from '@ant-design/icons-svg/lib/asn/MehFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MehFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MehFilled: MehFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MehFilledSvg}></AntdIcon>;
};

MehFilled.displayName = 'MehFilled';
MehFilled.inheritAttrs = false;
export default MehFilled;