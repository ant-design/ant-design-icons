// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FlagFilledSvg from '@ant-design/icons-svg/lib/asn/FlagFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlagFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlagFilledSvg}></AntdIcon>;
};

FlagFilled.displayName = 'FlagFilled';
FlagFilled.inheritAttrs = false;
export default FlagFilled;