// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PictureOutlinedSvg from '@ant-design/icons-svg/lib/asn/PictureOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PictureOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PictureOutlinedSvg}></AntdIcon>;
};

PictureOutlined.displayName = 'PictureOutlined';
PictureOutlined.inheritAttrs = false;
export default PictureOutlined;