// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BehanceSquareFilledSvg from '@ant-design/icons-svg/lib/asn/BehanceSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BehanceSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BehanceSquareFilled: BehanceSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BehanceSquareFilledSvg}></AntdIcon>;
};

BehanceSquareFilled.displayName = 'BehanceSquareFilled';
BehanceSquareFilled.inheritAttrs = false;
export default BehanceSquareFilled;