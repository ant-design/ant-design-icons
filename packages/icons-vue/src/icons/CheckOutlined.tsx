// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CheckOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CheckOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CheckOutlined: CheckOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckOutlinedSvg}></AntdIcon>;
};

CheckOutlined.displayName = 'CheckOutlined';
CheckOutlined.inheritAttrs = false;
export default CheckOutlined;