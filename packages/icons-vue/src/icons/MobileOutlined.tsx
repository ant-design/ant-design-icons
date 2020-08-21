// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MobileOutlinedSvg from '@ant-design/icons-svg/lib/asn/MobileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MobileOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MobileOutlinedSvg}></AntdIcon>;
};

MobileOutlined.displayName = 'MobileOutlined';
MobileOutlined.inheritAttrs = false;
export default MobileOutlined;