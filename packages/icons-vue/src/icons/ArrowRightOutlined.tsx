// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRightOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRightOutlined: ArrowRightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRightOutlinedSvg}></AntdIcon>;
};

ArrowRightOutlined.displayName = 'ArrowRightOutlined';
ArrowRightOutlined.inheritAttrs = false;
export default ArrowRightOutlined;