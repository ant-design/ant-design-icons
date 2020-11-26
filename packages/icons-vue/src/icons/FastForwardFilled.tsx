// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FastForwardFilledSvg from '@ant-design/icons-svg/lib/asn/FastForwardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FastForwardFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FastForwardFilled: FastForwardFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FastForwardFilledSvg}></AntdIcon>;
};

FastForwardFilled.displayName = 'FastForwardFilled';
FastForwardFilled.inheritAttrs = false;
export default FastForwardFilled;