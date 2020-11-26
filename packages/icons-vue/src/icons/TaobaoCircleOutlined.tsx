// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TaobaoCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/TaobaoCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TaobaoCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TaobaoCircleOutlined: TaobaoCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaobaoCircleOutlinedSvg}></AntdIcon>;
};

TaobaoCircleOutlined.displayName = 'TaobaoCircleOutlined';
TaobaoCircleOutlined.inheritAttrs = false;
export default TaobaoCircleOutlined;