// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardFilledSvg from '@ant-design/icons-svg/lib/asn/ForwardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardFilled: ForwardFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardFilledSvg}></AntdIcon>;
};

ForwardFilled.displayName = 'ForwardFilled';
ForwardFilled.inheritAttrs = false;
export default ForwardFilled;