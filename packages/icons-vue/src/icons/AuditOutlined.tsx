// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AuditOutlinedSvg from '@ant-design/icons-svg/lib/asn/AuditOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AuditOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AuditOutlined: AuditOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AuditOutlinedSvg}></AntdIcon>;
};

AuditOutlined.displayName = 'AuditOutlined';
AuditOutlined.inheritAttrs = false;
export default AuditOutlined;