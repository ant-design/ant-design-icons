// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SlidersOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlidersOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SlidersOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlidersOutlinedSvg}></AntdIcon>;
};

SlidersOutlined.displayName = 'SlidersOutlined';
SlidersOutlined.inheritAttrs = false;
export default SlidersOutlined;