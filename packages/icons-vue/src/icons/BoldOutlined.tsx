// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/BoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BoldOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoldOutlinedSvg}></AntdIcon>;
};

BoldOutlined.displayName = 'BoldOutlined';
BoldOutlined.inheritAttrs = false;
export default BoldOutlined;