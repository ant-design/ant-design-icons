// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PayCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PayCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PayCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PayCircleOutlined: PayCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PayCircleOutlinedSvg}></AntdIcon>;
};

PayCircleOutlined.displayName = 'PayCircleOutlined';
PayCircleOutlined.inheritAttrs = false;
export default PayCircleOutlined;