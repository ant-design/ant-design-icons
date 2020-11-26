// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDownOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowDownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDownOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDownOutlined: ArrowDownOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDownOutlinedSvg}></AntdIcon>;
};

ArrowDownOutlined.displayName = 'ArrowDownOutlined';
ArrowDownOutlined.inheritAttrs = false;
export default ArrowDownOutlined;