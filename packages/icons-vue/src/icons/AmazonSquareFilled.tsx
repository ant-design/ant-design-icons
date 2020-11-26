// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AmazonSquareFilledSvg from '@ant-design/icons-svg/lib/asn/AmazonSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AmazonSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AmazonSquareFilled: AmazonSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AmazonSquareFilledSvg}></AntdIcon>;
};

AmazonSquareFilled.displayName = 'AmazonSquareFilled';
AmazonSquareFilled.inheritAttrs = false;
export default AmazonSquareFilled;