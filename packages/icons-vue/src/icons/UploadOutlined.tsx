// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UploadOutlinedSvg from '@ant-design/icons-svg/lib/asn/UploadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UploadOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UploadOutlined: UploadOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UploadOutlinedSvg}></AntdIcon>;
};

UploadOutlined.displayName = 'UploadOutlined';
UploadOutlined.inheritAttrs = false;
export default UploadOutlined;