// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VerticalRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VerticalRightOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VerticalRightOutlined: VerticalRightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VerticalRightOutlinedSvg}></AntdIcon>;
};

VerticalRightOutlined.displayName = 'VerticalRightOutlined';
VerticalRightOutlined.inheritAttrs = false;
export default VerticalRightOutlined;