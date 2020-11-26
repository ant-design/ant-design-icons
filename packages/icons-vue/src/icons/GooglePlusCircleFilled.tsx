// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GooglePlusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/GooglePlusCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GooglePlusCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GooglePlusCircleFilled: GooglePlusCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GooglePlusCircleFilledSvg}></AntdIcon>;
};

GooglePlusCircleFilled.displayName = 'GooglePlusCircleFilled';
GooglePlusCircleFilled.inheritAttrs = false;
export default GooglePlusCircleFilled;