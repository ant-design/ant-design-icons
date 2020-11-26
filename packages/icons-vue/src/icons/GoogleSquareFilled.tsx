// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GoogleSquareFilledSvg from '@ant-design/icons-svg/lib/asn/GoogleSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GoogleSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GoogleSquareFilled: GoogleSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GoogleSquareFilledSvg}></AntdIcon>;
};

GoogleSquareFilled.displayName = 'GoogleSquareFilled';
GoogleSquareFilled.inheritAttrs = false;
export default GoogleSquareFilled;