// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowsAltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowsAltOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowsAltOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowsAltOutlined: ArrowsAltOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowsAltOutlinedSvg}></AntdIcon>;
};

ArrowsAltOutlined.displayName = 'ArrowsAltOutlined';
ArrowsAltOutlined.inheritAttrs = false;
export default ArrowsAltOutlined;