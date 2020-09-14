// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MinusOutlinedSvg from '@ant-design/icons-svg/lib/asn/MinusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MinusOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusOutlinedSvg}></AntdIcon>;
};

MinusOutlined.displayName = 'MinusOutlined';
MinusOutlined.inheritAttrs = false;
export default MinusOutlined;