// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UploadOutlinedSvg from '@ant-design/icons-svg/lib/asn/UploadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UploadOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UploadOutlinedSvg}></AntdIcon>;
};

UploadOutlined.displayName = 'UploadOutlined';
UploadOutlined.inheritAttrs = false;
export default UploadOutlined;