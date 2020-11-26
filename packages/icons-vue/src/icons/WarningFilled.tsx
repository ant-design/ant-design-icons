// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WarningFilledSvg from '@ant-design/icons-svg/lib/asn/WarningFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WarningFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WarningFilled: WarningFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WarningFilledSvg}></AntdIcon>;
};

WarningFilled.displayName = 'WarningFilled';
WarningFilled.inheritAttrs = false;
export default WarningFilled;