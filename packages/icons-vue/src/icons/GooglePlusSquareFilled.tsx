// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GooglePlusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/GooglePlusSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GooglePlusSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GooglePlusSquareFilled: GooglePlusSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GooglePlusSquareFilledSvg}></AntdIcon>;
};

GooglePlusSquareFilled.displayName = 'GooglePlusSquareFilled';
GooglePlusSquareFilled.inheritAttrs = false;
export default GooglePlusSquareFilled;