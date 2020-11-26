// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUpOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowUpOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUpOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUpOutlined: ArrowUpOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUpOutlinedSvg}></AntdIcon>;
};

ArrowUpOutlined.displayName = 'ArrowUpOutlined';
ArrowUpOutlined.inheritAttrs = false;
export default ArrowUpOutlined;