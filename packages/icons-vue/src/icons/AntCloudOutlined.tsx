// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AntCloudOutlinedSvg from '@ant-design/icons-svg/lib/asn/AntCloudOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AntCloudOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AntCloudOutlined: AntCloudOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AntCloudOutlinedSvg}></AntdIcon>;
};

AntCloudOutlined.displayName = 'AntCloudOutlined';
AntCloudOutlined.inheritAttrs = false;
export default AntCloudOutlined;