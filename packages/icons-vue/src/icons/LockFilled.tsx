// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LockFilledSvg from '@ant-design/icons-svg/lib/asn/LockFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LockFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockFilledSvg}></AntdIcon>;
};

LockFilled.displayName = 'LockFilled';
LockFilled.inheritAttrs = false;
export default LockFilled;