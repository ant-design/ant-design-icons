// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UnlockFilledSvg from '@ant-design/icons-svg/lib/asn/UnlockFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UnlockFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnlockFilledSvg}></AntdIcon>;
};

UnlockFilled.displayName = 'UnlockFilled';
UnlockFilled.inheritAttrs = false;
export default UnlockFilled;