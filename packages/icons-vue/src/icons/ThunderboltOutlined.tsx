// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ThunderboltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ThunderboltOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ThunderboltOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ThunderboltOutlined: ThunderboltOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ThunderboltOutlinedSvg}></AntdIcon>;
};

ThunderboltOutlined.displayName = 'ThunderboltOutlined';
ThunderboltOutlined.inheritAttrs = false;
export default ThunderboltOutlined;