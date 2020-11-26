// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SisternodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SisternodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SisternodeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SisternodeOutlined: SisternodeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SisternodeOutlinedSvg}></AntdIcon>;
};

SisternodeOutlined.displayName = 'SisternodeOutlined';
SisternodeOutlined.inheritAttrs = false;
export default SisternodeOutlined;