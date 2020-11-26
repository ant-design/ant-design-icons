// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudUploadOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudUploadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudUploadOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudUploadOutlined: CloudUploadOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudUploadOutlinedSvg}></AntdIcon>;
};

CloudUploadOutlined.displayName = 'CloudUploadOutlined';
CloudUploadOutlined.inheritAttrs = false;
export default CloudUploadOutlined;