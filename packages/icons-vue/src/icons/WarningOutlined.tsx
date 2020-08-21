// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WarningOutlinedSvg from '@ant-design/icons-svg/lib/asn/WarningOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WarningOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WarningOutlinedSvg}></AntdIcon>;
};

WarningOutlined.displayName = 'WarningOutlined';
WarningOutlined.inheritAttrs = false;
export default WarningOutlined;