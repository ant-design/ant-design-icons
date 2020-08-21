// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BehanceOutlinedSvg from '@ant-design/icons-svg/lib/asn/BehanceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BehanceOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BehanceOutlinedSvg}></AntdIcon>;
};

BehanceOutlined.displayName = 'BehanceOutlined';
BehanceOutlined.inheritAttrs = false;
export default BehanceOutlined;