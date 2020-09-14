// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BorderOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BorderOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BorderOutlinedSvg}></AntdIcon>;
};

BorderOutlined.displayName = 'BorderOutlined';
BorderOutlined.inheritAttrs = false;
export default BorderOutlined;