// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AccountBookOutlinedSvg from '@ant-design/icons-svg/lib/asn/AccountBookOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AccountBookOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AccountBookOutlined: AccountBookOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AccountBookOutlinedSvg}></AntdIcon>;
};

AccountBookOutlined.displayName = 'AccountBookOutlined';
AccountBookOutlined.inheritAttrs = false;
export default AccountBookOutlined;