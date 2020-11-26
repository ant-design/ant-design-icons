// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TaobaoCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TaobaoCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TaobaoCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TaobaoCircleFilled: TaobaoCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaobaoCircleFilledSvg}></AntdIcon>;
};

TaobaoCircleFilled.displayName = 'TaobaoCircleFilled';
TaobaoCircleFilled.inheritAttrs = false;
export default TaobaoCircleFilled;