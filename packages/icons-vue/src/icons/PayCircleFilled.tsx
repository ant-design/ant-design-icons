// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PayCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PayCircleFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PayCircleFilledSvg}></AntdIcon>;
};

PayCircleFilled.displayName = 'PayCircleFilled';
PayCircleFilled.inheritAttrs = false;
export default PayCircleFilled;