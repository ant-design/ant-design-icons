// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CoffeeOutlinedSvg from '@ant-design/icons-svg/lib/asn/CoffeeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CoffeeOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoffeeOutlinedSvg}></AntdIcon>;
};

CoffeeOutlined.displayName = 'CoffeeOutlined';
CoffeeOutlined.inheritAttrs = false;
export default CoffeeOutlined;