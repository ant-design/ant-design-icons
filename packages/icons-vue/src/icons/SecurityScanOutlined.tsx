// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityScanOutlinedSvg from '@ant-design/icons-svg/lib/asn/SecurityScanOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityScanOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityScanOutlined: SecurityScanOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityScanOutlinedSvg}></AntdIcon>;
};

SecurityScanOutlined.displayName = 'SecurityScanOutlined';
SecurityScanOutlined.inheritAttrs = false;
export default SecurityScanOutlined;