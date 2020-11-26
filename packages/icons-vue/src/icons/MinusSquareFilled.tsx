// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/MinusSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusSquareFilled: MinusSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusSquareFilledSvg}></AntdIcon>;
};

MinusSquareFilled.displayName = 'MinusSquareFilled';
MinusSquareFilled.inheritAttrs = false;
export default MinusSquareFilled;