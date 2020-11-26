// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeOutlinedSvg from '@ant-design/icons-svg/lib/asn/HomeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeOutlined: HomeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeOutlinedSvg}></AntdIcon>;
};

HomeOutlined.displayName = 'HomeOutlined';
HomeOutlined.inheritAttrs = false;
export default HomeOutlined;