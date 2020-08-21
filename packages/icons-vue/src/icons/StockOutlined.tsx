// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StockOutlinedSvg from '@ant-design/icons-svg/lib/asn/StockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StockOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StockOutlinedSvg}></AntdIcon>;
};

StockOutlined.displayName = 'StockOutlined';
StockOutlined.inheritAttrs = false;
export default StockOutlined;