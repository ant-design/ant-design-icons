// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/MinusCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusCircleOutlined: MinusCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusCircleOutlinedSvg}></AntdIcon>;
};

MinusCircleOutlined.displayName = 'MinusCircleOutlined';
MinusCircleOutlined.inheritAttrs = false;
export default MinusCircleOutlined;