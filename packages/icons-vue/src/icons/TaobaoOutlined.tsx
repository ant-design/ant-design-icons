// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TaobaoOutlinedSvg from '@ant-design/icons-svg/lib/asn/TaobaoOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TaobaoOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TaobaoOutlined: TaobaoOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaobaoOutlinedSvg}></AntdIcon>;
};

TaobaoOutlined.displayName = 'TaobaoOutlined';
TaobaoOutlined.inheritAttrs = false;
export default TaobaoOutlined;