// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/MinusSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusSquareTwoTone: MinusSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusSquareTwoToneSvg}></AntdIcon>;
};

MinusSquareTwoTone.displayName = 'MinusSquareTwoTone';
MinusSquareTwoTone.inheritAttrs = false;
export default MinusSquareTwoTone;