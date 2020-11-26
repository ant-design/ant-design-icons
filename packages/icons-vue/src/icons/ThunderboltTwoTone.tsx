// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ThunderboltTwoToneSvg from '@ant-design/icons-svg/lib/asn/ThunderboltTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ThunderboltTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ThunderboltTwoTone: ThunderboltTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ThunderboltTwoToneSvg}></AntdIcon>;
};

ThunderboltTwoTone.displayName = 'ThunderboltTwoTone';
ThunderboltTwoTone.inheritAttrs = false;
export default ThunderboltTwoTone;