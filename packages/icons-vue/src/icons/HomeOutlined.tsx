// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HomeOutlinedSvg from '@ant-design/icons-svg/lib/asn/HomeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeOutlinedSvg}></AntdIcon>;
};

HomeOutlined.displayName = 'HomeOutlined';
HomeOutlined.inheritAttrs = false;
export default HomeOutlined;