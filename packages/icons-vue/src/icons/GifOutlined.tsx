// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GifOutlinedSvg from '@ant-design/icons-svg/lib/asn/GifOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GifOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GifOutlinedSvg}></AntdIcon>;
};

GifOutlined.displayName = 'GifOutlined';
GifOutlined.inheritAttrs = false;
export default GifOutlined;