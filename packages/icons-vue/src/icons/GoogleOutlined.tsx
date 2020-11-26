// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GoogleOutlinedSvg from '@ant-design/icons-svg/lib/asn/GoogleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GoogleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GoogleOutlined: GoogleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GoogleOutlinedSvg}></AntdIcon>;
};

GoogleOutlined.displayName = 'GoogleOutlined';
GoogleOutlined.inheritAttrs = false;
export default GoogleOutlined;