// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MinusCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/MinusCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MinusCircleOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusCircleOutlinedSvg}></AntdIcon>;
};

MinusCircleOutlined.displayName = 'MinusCircleOutlined';
MinusCircleOutlined.inheritAttrs = false;
export default MinusCircleOutlined;