// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BgColorsOutlinedSvg from '@ant-design/icons-svg/lib/asn/BgColorsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BgColorsOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BgColorsOutlinedSvg}></AntdIcon>;
};

BgColorsOutlined.displayName = 'BgColorsOutlined';
BgColorsOutlined.inheritAttrs = false;
export default BgColorsOutlined;