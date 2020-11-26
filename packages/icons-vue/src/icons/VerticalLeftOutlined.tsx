// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VerticalLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VerticalLeftOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VerticalLeftOutlined: VerticalLeftOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VerticalLeftOutlinedSvg}></AntdIcon>;
};

VerticalLeftOutlined.displayName = 'VerticalLeftOutlined';
VerticalLeftOutlined.inheritAttrs = false;
export default VerticalLeftOutlined;