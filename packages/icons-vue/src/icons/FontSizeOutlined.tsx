// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FontSizeOutlinedSvg from '@ant-design/icons-svg/lib/asn/FontSizeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FontSizeOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FontSizeOutlinedSvg}></AntdIcon>;
};

FontSizeOutlined.displayName = 'FontSizeOutlined';
FontSizeOutlined.inheritAttrs = false;
export default FontSizeOutlined;