// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PayCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PayCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PayCircleFilled: PayCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PayCircleFilledSvg}></AntdIcon>;
};

PayCircleFilled.displayName = 'PayCircleFilled';
PayCircleFilled.inheritAttrs = false;
export default PayCircleFilled;