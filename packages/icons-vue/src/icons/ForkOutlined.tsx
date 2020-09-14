// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ForkOutlinedSvg from '@ant-design/icons-svg/lib/asn/ForkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ForkOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForkOutlinedSvg}></AntdIcon>;
};

ForkOutlined.displayName = 'ForkOutlined';
ForkOutlined.inheritAttrs = false;
export default ForkOutlined;