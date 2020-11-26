// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LeftCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LeftCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LeftCircleOutlined: LeftCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LeftCircleOutlinedSvg}></AntdIcon>;
};

LeftCircleOutlined.displayName = 'LeftCircleOutlined';
LeftCircleOutlined.inheritAttrs = false;
export default LeftCircleOutlined;