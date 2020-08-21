// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UnlockOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnlockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UnlockOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnlockOutlinedSvg}></AntdIcon>;
};

UnlockOutlined.displayName = 'UnlockOutlined';
UnlockOutlined.inheritAttrs = false;
export default UnlockOutlined;