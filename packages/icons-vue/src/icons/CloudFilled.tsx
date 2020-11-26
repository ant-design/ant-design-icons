// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudFilledSvg from '@ant-design/icons-svg/lib/asn/CloudFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudFilled: CloudFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudFilledSvg}></AntdIcon>;
};

CloudFilled.displayName = 'CloudFilled';
CloudFilled.inheritAttrs = false;
export default CloudFilled;