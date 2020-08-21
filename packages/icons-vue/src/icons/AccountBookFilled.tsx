// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AccountBookFilledSvg from '@ant-design/icons-svg/lib/asn/AccountBookFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountBookFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AccountBookFilledSvg}></AntdIcon>;
};

AccountBookFilled.displayName = 'AccountBookFilled';
AccountBookFilled.inheritAttrs = false;
export default AccountBookFilled;