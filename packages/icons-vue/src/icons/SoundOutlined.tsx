// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SoundOutlinedSvg from '@ant-design/icons-svg/lib/asn/SoundOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SoundOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SoundOutlinedSvg}></AntdIcon>;
};

SoundOutlined.displayName = 'SoundOutlined';
SoundOutlined.inheritAttrs = false;
export default SoundOutlined;