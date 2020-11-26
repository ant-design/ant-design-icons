// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScheduleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ScheduleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScheduleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScheduleTwoTone: ScheduleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScheduleTwoToneSvg}></AntdIcon>;
};

ScheduleTwoTone.displayName = 'ScheduleTwoTone';
ScheduleTwoTone.inheritAttrs = false;
export default ScheduleTwoTone;