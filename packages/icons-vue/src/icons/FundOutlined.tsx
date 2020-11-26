// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FundOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FundOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FundOutlined: FundOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FundOutlinedSvg}></AntdIcon>;
};

FundOutlined.displayName = 'FundOutlined';
FundOutlined.inheritAttrs = false;
export default FundOutlined;