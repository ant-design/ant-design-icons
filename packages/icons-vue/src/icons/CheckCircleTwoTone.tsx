// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CheckCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CheckCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CheckCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CheckCircleTwoTone: CheckCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckCircleTwoToneSvg}></AntdIcon>;
};

CheckCircleTwoTone.displayName = 'CheckCircleTwoTone';
CheckCircleTwoTone.inheritAttrs = false;
export default CheckCircleTwoTone;