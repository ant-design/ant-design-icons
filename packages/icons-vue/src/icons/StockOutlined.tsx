// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StockOutlinedSvg from '@ant-design/icons-svg/lib/asn/StockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StockOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StockOutlined: StockOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StockOutlinedSvg}></AntdIcon>;
};

StockOutlined.displayName = 'StockOutlined';
StockOutlined.inheritAttrs = false;
export default StockOutlined;