// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AccountBookTwoToneSvg from '@ant-design/icons-svg/lib/asn/AccountBookTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AccountBookTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AccountBookTwoTone: AccountBookTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AccountBookTwoToneSvg}></AntdIcon>;
};

AccountBookTwoTone.displayName = 'AccountBookTwoTone';
AccountBookTwoTone.inheritAttrs = false;
export default AccountBookTwoTone;