// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LeftCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/LeftCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LeftCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LeftCircleTwoTone: LeftCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LeftCircleTwoToneSvg}></AntdIcon>;
};

LeftCircleTwoTone.displayName = 'LeftCircleTwoTone';
LeftCircleTwoTone.inheritAttrs = false;
export default LeftCircleTwoTone;