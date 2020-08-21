// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FundOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FundOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FundOutlinedSvg}></AntdIcon>;
};

FundOutlined.displayName = 'FundOutlined';
FundOutlined.inheritAttrs = false;
export default FundOutlined;