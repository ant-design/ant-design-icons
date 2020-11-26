// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FacebookFilledSvg from '@ant-design/icons-svg/lib/asn/FacebookFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FacebookFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FacebookFilled: FacebookFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FacebookFilledSvg}></AntdIcon>;
};

FacebookFilled.displayName = 'FacebookFilled';
FacebookFilled.inheritAttrs = false;
export default FacebookFilled;