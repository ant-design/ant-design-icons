// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DashOutlinedSvg from '@ant-design/icons-svg/lib/asn/DashOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DashOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DashOutlinedSvg}></AntdIcon>;
};

DashOutlined.displayName = 'DashOutlined';
DashOutlined.inheritAttrs = false;
export default DashOutlined;