// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/MinusCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusCircleTwoTone: MinusCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusCircleTwoToneSvg}></AntdIcon>;
};

MinusCircleTwoTone.displayName = 'MinusCircleTwoTone';
MinusCircleTwoTone.inheritAttrs = false;
export default MinusCircleTwoTone;