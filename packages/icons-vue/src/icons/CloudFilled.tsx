// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CloudFilledSvg from '@ant-design/icons-svg/lib/asn/CloudFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudFilledSvg}></AntdIcon>;
};

CloudFilled.displayName = 'CloudFilled';
CloudFilled.inheritAttrs = false;
export default CloudFilled;