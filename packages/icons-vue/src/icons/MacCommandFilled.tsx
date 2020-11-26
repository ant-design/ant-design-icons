// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MacCommandFilledSvg from '@ant-design/icons-svg/lib/asn/MacCommandFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MacCommandFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MacCommandFilled: MacCommandFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MacCommandFilledSvg}></AntdIcon>;
};

MacCommandFilled.displayName = 'MacCommandFilled';
MacCommandFilled.inheritAttrs = false;
export default MacCommandFilled;