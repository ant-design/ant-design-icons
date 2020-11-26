// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PauseCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PauseCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PauseCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PauseCircleTwoTone: PauseCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseCircleTwoToneSvg}></AntdIcon>;
};

PauseCircleTwoTone.displayName = 'PauseCircleTwoTone';
PauseCircleTwoTone.inheritAttrs = false;
export default PauseCircleTwoTone;