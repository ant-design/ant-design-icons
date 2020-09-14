// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FallOutlinedSvg from '@ant-design/icons-svg/lib/asn/FallOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FallOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FallOutlinedSvg}></AntdIcon>;
};

FallOutlined.displayName = 'FallOutlined';
FallOutlined.inheritAttrs = false;
export default FallOutlined;