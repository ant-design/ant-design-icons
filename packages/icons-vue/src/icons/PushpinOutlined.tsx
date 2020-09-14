// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PushpinOutlinedSvg from '@ant-design/icons-svg/lib/asn/PushpinOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PushpinOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PushpinOutlinedSvg}></AntdIcon>;
};

PushpinOutlined.displayName = 'PushpinOutlined';
PushpinOutlined.inheritAttrs = false;
export default PushpinOutlined;