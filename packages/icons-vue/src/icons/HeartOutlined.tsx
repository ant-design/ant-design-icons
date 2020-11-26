// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartOutlinedSvg from '@ant-design/icons-svg/lib/asn/HeartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartOutlined: HeartOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartOutlinedSvg}></AntdIcon>;
};

HeartOutlined.displayName = 'HeartOutlined';
HeartOutlined.inheritAttrs = false;
export default HeartOutlined;