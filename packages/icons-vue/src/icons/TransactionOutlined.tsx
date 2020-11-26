// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TransactionOutlinedSvg from '@ant-design/icons-svg/lib/asn/TransactionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TransactionOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TransactionOutlined: TransactionOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TransactionOutlinedSvg}></AntdIcon>;
};

TransactionOutlined.displayName = 'TransactionOutlined';
TransactionOutlined.inheritAttrs = false;
export default TransactionOutlined;