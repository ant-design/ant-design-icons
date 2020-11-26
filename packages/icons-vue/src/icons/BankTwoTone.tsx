// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BankTwoToneSvg from '@ant-design/icons-svg/lib/asn/BankTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BankTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BankTwoTone: BankTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BankTwoToneSvg}></AntdIcon>;
};

BankTwoTone.displayName = 'BankTwoTone';
BankTwoTone.inheritAttrs = false;
export default BankTwoTone;