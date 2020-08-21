// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailOutlinedSvg from '@ant-design/icons-svg/lib/asn/MailOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailOutlinedSvg}></AntdIcon>;
};

MailOutlined.displayName = 'MailOutlined';
MailOutlined.inheritAttrs = false;
export default MailOutlined;