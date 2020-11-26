// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FundProjectionScreenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundProjectionScreenOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FundProjectionScreenOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FundProjectionScreenOutlined: FundProjectionScreenOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FundProjectionScreenOutlinedSvg}></AntdIcon>;
};

FundProjectionScreenOutlined.displayName = 'FundProjectionScreenOutlined';
FundProjectionScreenOutlined.inheritAttrs = false;
export default FundProjectionScreenOutlined;