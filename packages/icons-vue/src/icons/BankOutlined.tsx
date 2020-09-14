// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BankOutlinedSvg from '@ant-design/icons-svg/lib/asn/BankOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BankOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BankOutlinedSvg}></AntdIcon>;
};

BankOutlined.displayName = 'BankOutlined';
BankOutlined.inheritAttrs = false;
export default BankOutlined;