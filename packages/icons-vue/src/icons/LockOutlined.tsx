// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LockOutlinedSvg from '@ant-design/icons-svg/lib/asn/LockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LockOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockOutlinedSvg}></AntdIcon>;
};

LockOutlined.displayName = 'LockOutlined';
LockOutlined.inheritAttrs = false;
export default LockOutlined;