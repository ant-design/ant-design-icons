// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CreditCardOutlinedSvg from '@ant-design/icons-svg/lib/asn/CreditCardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CreditCardOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CreditCardOutlinedSvg}></AntdIcon>;
};

CreditCardOutlined.displayName = 'CreditCardOutlined';
CreditCardOutlined.inheritAttrs = false;
export default CreditCardOutlined;