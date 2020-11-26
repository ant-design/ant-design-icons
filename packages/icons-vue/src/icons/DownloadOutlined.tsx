// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DownloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownloadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DownloadOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DownloadOutlined: DownloadOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DownloadOutlinedSvg}></AntdIcon>;
};

DownloadOutlined.displayName = 'DownloadOutlined';
DownloadOutlined.inheritAttrs = false;
export default DownloadOutlined;