// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SmallDashOutlinedSvg from '@ant-design/icons-svg/lib/asn/SmallDashOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SmallDashOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmallDashOutlinedSvg}></AntdIcon>;
};

SmallDashOutlined.displayName = 'SmallDashOutlined';
SmallDashOutlined.inheritAttrs = false;
export default SmallDashOutlined;