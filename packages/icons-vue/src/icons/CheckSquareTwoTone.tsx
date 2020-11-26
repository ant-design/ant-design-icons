// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CheckSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/CheckSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CheckSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CheckSquareTwoTone: CheckSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckSquareTwoToneSvg}></AntdIcon>;
};

CheckSquareTwoTone.displayName = 'CheckSquareTwoTone';
CheckSquareTwoTone.inheritAttrs = false;
export default CheckSquareTwoTone;