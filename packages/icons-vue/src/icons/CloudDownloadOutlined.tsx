// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudDownloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudDownloadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudDownloadOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudDownloadOutlined: CloudDownloadOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudDownloadOutlinedSvg}></AntdIcon>;
};

CloudDownloadOutlined.displayName = 'CloudDownloadOutlined';
CloudDownloadOutlined.inheritAttrs = false;
export default CloudDownloadOutlined;