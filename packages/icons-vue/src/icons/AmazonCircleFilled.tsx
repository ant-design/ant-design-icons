// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AmazonCircleFilledSvg from '@ant-design/icons-svg/lib/asn/AmazonCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AmazonCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AmazonCircleFilled: AmazonCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AmazonCircleFilledSvg}></AntdIcon>;
};

AmazonCircleFilled.displayName = 'AmazonCircleFilled';
AmazonCircleFilled.inheritAttrs = false;
export default AmazonCircleFilled;