// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GoogleOutlinedSvg from '@ant-design/icons-svg/lib/asn/GoogleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoogleOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GoogleOutlinedSvg}></AntdIcon>;
};

GoogleOutlined.displayName = 'GoogleOutlined';
GoogleOutlined.inheritAttrs = false;
export default GoogleOutlined;