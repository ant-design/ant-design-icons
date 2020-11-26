// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InsuranceOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsuranceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InsuranceOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InsuranceOutlined: InsuranceOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InsuranceOutlinedSvg}></AntdIcon>;
};

InsuranceOutlined.displayName = 'InsuranceOutlined';
InsuranceOutlined.inheritAttrs = false;
export default InsuranceOutlined;