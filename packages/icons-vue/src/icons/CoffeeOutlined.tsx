// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CoffeeOutlinedSvg from '@ant-design/icons-svg/lib/asn/CoffeeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CoffeeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CoffeeOutlined: CoffeeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoffeeOutlinedSvg}></AntdIcon>;
};

CoffeeOutlined.displayName = 'CoffeeOutlined';
CoffeeOutlined.inheritAttrs = false;
export default CoffeeOutlined;