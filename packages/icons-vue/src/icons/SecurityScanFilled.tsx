// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SecurityScanFilledSvg from '@ant-design/icons-svg/lib/asn/SecurityScanFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SecurityScanFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityScanFilledSvg}></AntdIcon>;
};

SecurityScanFilled.displayName = 'SecurityScanFilled';
SecurityScanFilled.inheritAttrs = false;
export default SecurityScanFilled;