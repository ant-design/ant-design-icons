// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityScanTwoToneSvg from '@ant-design/icons-svg/lib/asn/SecurityScanTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityScanTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityScanTwoTone: SecurityScanTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityScanTwoToneSvg}></AntdIcon>;
};

SecurityScanTwoTone.displayName = 'SecurityScanTwoTone';
SecurityScanTwoTone.inheritAttrs = false;
export default SecurityScanTwoTone;