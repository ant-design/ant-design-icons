// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StarOutlinedSvg from '@ant-design/icons-svg/lib/asn/StarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StarOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StarOutlined: StarOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarOutlinedSvg}></AntdIcon>;
};

StarOutlined.displayName = 'StarOutlined';
StarOutlined.inheritAttrs = false;
export default StarOutlined;