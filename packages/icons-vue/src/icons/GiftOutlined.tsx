// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GiftOutlinedSvg from '@ant-design/icons-svg/lib/asn/GiftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GiftOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GiftOutlinedSvg}></AntdIcon>;
};

GiftOutlined.displayName = 'GiftOutlined';
GiftOutlined.inheritAttrs = false;
export default GiftOutlined;