// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MailOutlinedSvg from '@ant-design/icons-svg/lib/asn/MailOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MailOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MailOutlined: MailOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailOutlinedSvg}></AntdIcon>;
};

MailOutlined.displayName = 'MailOutlined';
MailOutlined.inheritAttrs = false;
export default MailOutlined;