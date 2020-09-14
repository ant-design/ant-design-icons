// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EyeOutlinedSvg from '@ant-design/icons-svg/lib/asn/EyeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EyeOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeOutlinedSvg}></AntdIcon>;
};

EyeOutlined.displayName = 'EyeOutlined';
EyeOutlined.inheritAttrs = false;
export default EyeOutlined;