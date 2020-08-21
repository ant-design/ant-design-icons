// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GlobalOutlinedSvg from '@ant-design/icons-svg/lib/asn/GlobalOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GlobalOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalOutlinedSvg}></AntdIcon>;
};

GlobalOutlined.displayName = 'GlobalOutlined';
GlobalOutlined.inheritAttrs = false;
export default GlobalOutlined;