// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PushpinFilledSvg from '@ant-design/icons-svg/lib/asn/PushpinFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PushpinFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PushpinFilledSvg}></AntdIcon>;
};

PushpinFilled.displayName = 'PushpinFilled';
PushpinFilled.inheritAttrs = false;
export default PushpinFilled;