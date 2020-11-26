// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GoldenFilledSvg from '@ant-design/icons-svg/lib/asn/GoldenFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GoldenFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GoldenFilled: GoldenFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GoldenFilledSvg}></AntdIcon>;
};

GoldenFilled.displayName = 'GoldenFilled';
GoldenFilled.inheritAttrs = false;
export default GoldenFilled;