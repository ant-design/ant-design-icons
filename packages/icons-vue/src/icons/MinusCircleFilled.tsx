// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/MinusCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusCircleFilled: MinusCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusCircleFilledSvg}></AntdIcon>;
};

MinusCircleFilled.displayName = 'MinusCircleFilled';
MinusCircleFilled.inheritAttrs = false;
export default MinusCircleFilled;