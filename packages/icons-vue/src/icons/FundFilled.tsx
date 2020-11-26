// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FundFilledSvg from '@ant-design/icons-svg/lib/asn/FundFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FundFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FundFilled: FundFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FundFilledSvg}></AntdIcon>;
};

FundFilled.displayName = 'FundFilled';
FundFilled.inheritAttrs = false;
export default FundFilled;