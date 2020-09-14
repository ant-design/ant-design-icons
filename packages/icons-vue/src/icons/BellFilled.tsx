// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BellFilledSvg from '@ant-design/icons-svg/lib/asn/BellFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BellFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BellFilledSvg}></AntdIcon>;
};

BellFilled.displayName = 'BellFilled';
BellFilled.inheritAttrs = false;
export default BellFilled;