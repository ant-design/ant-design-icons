// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GoldFilledSvg from '@ant-design/icons-svg/lib/asn/GoldFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoldFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GoldFilledSvg}></AntdIcon>;
};

GoldFilled.displayName = 'GoldFilled';
GoldFilled.inheritAttrs = false;
export default GoldFilled;