// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WarningTwoToneSvg from '@ant-design/icons-svg/lib/asn/WarningTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WarningTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WarningTwoTone: WarningTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WarningTwoToneSvg}></AntdIcon>;
};

WarningTwoTone.displayName = 'WarningTwoTone';
WarningTwoTone.inheritAttrs = false;
export default WarningTwoTone;