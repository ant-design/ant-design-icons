// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AccountBookFilledSvg from '@ant-design/icons-svg/lib/asn/AccountBookFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AccountBookFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AccountBookFilled: AccountBookFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AccountBookFilledSvg}></AntdIcon>;
};

AccountBookFilled.displayName = 'AccountBookFilled';
AccountBookFilled.inheritAttrs = false;
export default AccountBookFilled;