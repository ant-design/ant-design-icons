// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CheckCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CheckCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CheckCircleOutlined: CheckCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckCircleOutlinedSvg}></AntdIcon>;
};

CheckCircleOutlined.displayName = 'CheckCircleOutlined';
CheckCircleOutlined.inheritAttrs = false;
export default CheckCircleOutlined;