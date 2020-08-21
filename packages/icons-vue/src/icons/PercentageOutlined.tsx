// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PercentageOutlinedSvg from '@ant-design/icons-svg/lib/asn/PercentageOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PercentageOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PercentageOutlinedSvg}></AntdIcon>;
};

PercentageOutlined.displayName = 'PercentageOutlined';
PercentageOutlined.inheritAttrs = false;
export default PercentageOutlined;