// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/GoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoldOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GoldOutlinedSvg}></AntdIcon>;
};

GoldOutlined.displayName = 'GoldOutlined';
GoldOutlined.inheritAttrs = false;
export default GoldOutlined;