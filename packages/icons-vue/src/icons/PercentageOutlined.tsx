// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PercentageOutlinedSvg from '@ant-design/icons-svg/lib/asn/PercentageOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PercentageOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PercentageOutlined: PercentageOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PercentageOutlinedSvg}></AntdIcon>;
};

PercentageOutlined.displayName = 'PercentageOutlined';
PercentageOutlined.inheritAttrs = false;
export default PercentageOutlined;