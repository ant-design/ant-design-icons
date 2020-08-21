// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TransactionOutlinedSvg from '@ant-design/icons-svg/lib/asn/TransactionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TransactionOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TransactionOutlinedSvg}></AntdIcon>;
};

TransactionOutlined.displayName = 'TransactionOutlined';
TransactionOutlined.inheritAttrs = false;
export default TransactionOutlined;