// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AimOutlinedSvg from '@ant-design/icons-svg/lib/asn/AimOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AimOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AimOutlinedSvg}></AntdIcon>;
};

AimOutlined.displayName = 'AimOutlined';
AimOutlined.inheritAttrs = false;
export default AimOutlined;