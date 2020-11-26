// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GoogleCircleFilledSvg from '@ant-design/icons-svg/lib/asn/GoogleCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GoogleCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GoogleCircleFilled: GoogleCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GoogleCircleFilledSvg}></AntdIcon>;
};

GoogleCircleFilled.displayName = 'GoogleCircleFilled';
GoogleCircleFilled.inheritAttrs = false;
export default GoogleCircleFilled;