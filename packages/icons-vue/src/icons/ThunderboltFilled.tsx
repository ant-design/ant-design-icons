// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ThunderboltFilledSvg from '@ant-design/icons-svg/lib/asn/ThunderboltFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ThunderboltFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ThunderboltFilled: ThunderboltFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ThunderboltFilledSvg}></AntdIcon>;
};

ThunderboltFilled.displayName = 'ThunderboltFilled';
ThunderboltFilled.inheritAttrs = false;
export default ThunderboltFilled;