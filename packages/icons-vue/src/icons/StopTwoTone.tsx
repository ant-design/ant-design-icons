// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StopTwoToneSvg from '@ant-design/icons-svg/lib/asn/StopTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StopTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StopTwoTone: StopTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopTwoToneSvg}></AntdIcon>;
};

StopTwoTone.displayName = 'StopTwoTone';
StopTwoTone.inheritAttrs = false;
export default StopTwoTone;