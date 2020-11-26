// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeftOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeftOutlined: ArrowLeftOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeftOutlinedSvg}></AntdIcon>;
};

ArrowLeftOutlined.displayName = 'ArrowLeftOutlined';
ArrowLeftOutlined.inheritAttrs = false;
export default ArrowLeftOutlined;