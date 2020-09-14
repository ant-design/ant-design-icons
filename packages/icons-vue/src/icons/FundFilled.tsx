// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FundFilledSvg from '@ant-design/icons-svg/lib/asn/FundFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FundFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FundFilledSvg}></AntdIcon>;
};

FundFilled.displayName = 'FundFilled';
FundFilled.inheritAttrs = false;
export default FundFilled;