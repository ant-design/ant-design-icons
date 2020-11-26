// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendOutlinedSvg from '@ant-design/icons-svg/lib/asn/SendOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SendOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SendOutlined: SendOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendOutlinedSvg}></AntdIcon>;
};

SendOutlined.displayName = 'SendOutlined';
SendOutlined.inheritAttrs = false;
export default SendOutlined;