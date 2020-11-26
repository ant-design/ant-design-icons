// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlagFilledSvg from '@ant-design/icons-svg/lib/asn/FlagFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlagFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlagFilled: FlagFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlagFilledSvg}></AntdIcon>;
};

FlagFilled.displayName = 'FlagFilled';
FlagFilled.inheritAttrs = false;
export default FlagFilled;