// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CompassTwoToneSvg from '@ant-design/icons-svg/lib/asn/CompassTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CompassTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CompassTwoTone: CompassTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CompassTwoToneSvg}></AntdIcon>;
};

CompassTwoTone.displayName = 'CompassTwoTone';
CompassTwoTone.inheritAttrs = false;
export default CompassTwoTone;