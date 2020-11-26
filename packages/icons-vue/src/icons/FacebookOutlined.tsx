// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FacebookOutlinedSvg from '@ant-design/icons-svg/lib/asn/FacebookOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FacebookOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FacebookOutlined: FacebookOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FacebookOutlinedSvg}></AntdIcon>;
};

FacebookOutlined.displayName = 'FacebookOutlined';
FacebookOutlined.inheritAttrs = false;
export default FacebookOutlined;