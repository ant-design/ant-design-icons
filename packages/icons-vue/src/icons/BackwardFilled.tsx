// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackwardFilledSvg from '@ant-design/icons-svg/lib/asn/BackwardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackwardFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackwardFilled: BackwardFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackwardFilledSvg}></AntdIcon>;
};

BackwardFilled.displayName = 'BackwardFilled';
BackwardFilled.inheritAttrs = false;
export default BackwardFilled;