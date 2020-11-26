// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityScanFilledSvg from '@ant-design/icons-svg/lib/asn/SecurityScanFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityScanFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityScanFilled: SecurityScanFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityScanFilledSvg}></AntdIcon>;
};

SecurityScanFilled.displayName = 'SecurityScanFilled';
SecurityScanFilled.inheritAttrs = false;
export default SecurityScanFilled;