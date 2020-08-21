// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InsuranceFilledSvg from '@ant-design/icons-svg/lib/asn/InsuranceFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InsuranceFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InsuranceFilledSvg}></AntdIcon>;
};

InsuranceFilled.displayName = 'InsuranceFilled';
InsuranceFilled.inheritAttrs = false;
export default InsuranceFilled;