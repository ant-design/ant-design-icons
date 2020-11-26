// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudSyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudSyncOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudSyncOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudSyncOutlined: CloudSyncOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudSyncOutlinedSvg}></AntdIcon>;
};

CloudSyncOutlined.displayName = 'CloudSyncOutlined';
CloudSyncOutlined.inheritAttrs = false;
export default CloudSyncOutlined;