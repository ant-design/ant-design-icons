// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TaobaoSquareFilledSvg from '@ant-design/icons-svg/lib/asn/TaobaoSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TaobaoSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TaobaoSquareFilled: TaobaoSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaobaoSquareFilledSvg}></AntdIcon>;
};

TaobaoSquareFilled.displayName = 'TaobaoSquareFilled';
TaobaoSquareFilled.inheritAttrs = false;
export default TaobaoSquareFilled;