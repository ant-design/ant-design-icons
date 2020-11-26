// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudOutlined: CloudOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudOutlinedSvg}></AntdIcon>;
};

CloudOutlined.displayName = 'CloudOutlined';
CloudOutlined.inheritAttrs = false;
export default CloudOutlined;