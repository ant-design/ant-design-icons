// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BankTwoToneSvg from '@ant-design/icons-svg/lib/asn/BankTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BankTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BankTwoToneSvg}></AntdIcon>;
};

BankTwoTone.displayName = 'BankTwoTone';
BankTwoTone.inheritAttrs = false;
export default BankTwoTone;