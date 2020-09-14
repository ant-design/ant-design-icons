// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AuditOutlinedSvg from '@ant-design/icons-svg/lib/asn/AuditOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AuditOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AuditOutlinedSvg}></AntdIcon>;
};

AuditOutlined.displayName = 'AuditOutlined';
AuditOutlined.inheritAttrs = false;
export default AuditOutlined;