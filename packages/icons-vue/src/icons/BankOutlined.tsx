// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BankOutlinedSvg from '@ant-design/icons-svg/lib/asn/BankOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BankOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BankOutlined: BankOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BankOutlinedSvg}></AntdIcon>;
};

BankOutlined.displayName = 'BankOutlined';
BankOutlined.inheritAttrs = false;
export default BankOutlined;