// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GooglePlusOutlinedSvg from '@ant-design/icons-svg/lib/asn/GooglePlusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GooglePlusOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GooglePlusOutlined: GooglePlusOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GooglePlusOutlinedSvg}></AntdIcon>;
};

GooglePlusOutlined.displayName = 'GooglePlusOutlined';
GooglePlusOutlined.inheritAttrs = false;
export default GooglePlusOutlined;