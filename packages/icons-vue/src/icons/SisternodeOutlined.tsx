// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SisternodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SisternodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SisternodeOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SisternodeOutlinedSvg}></AntdIcon>;
};

SisternodeOutlined.displayName = 'SisternodeOutlined';
SisternodeOutlined.inheritAttrs = false;
export default SisternodeOutlined;