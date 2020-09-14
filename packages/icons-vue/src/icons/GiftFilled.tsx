// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GiftFilledSvg from '@ant-design/icons-svg/lib/asn/GiftFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GiftFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GiftFilledSvg}></AntdIcon>;
};

GiftFilled.displayName = 'GiftFilled';
GiftFilled.inheritAttrs = false;
export default GiftFilled;