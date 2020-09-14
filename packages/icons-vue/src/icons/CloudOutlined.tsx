// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CloudOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudOutlinedSvg}></AntdIcon>;
};

CloudOutlined.displayName = 'CloudOutlined';
CloudOutlined.inheritAttrs = false;
export default CloudOutlined;