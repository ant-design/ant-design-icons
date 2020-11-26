// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PushpinFilledSvg from '@ant-design/icons-svg/lib/asn/PushpinFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PushpinFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PushpinFilled: PushpinFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PushpinFilledSvg}></AntdIcon>;
};

PushpinFilled.displayName = 'PushpinFilled';
PushpinFilled.inheritAttrs = false;
export default PushpinFilled;