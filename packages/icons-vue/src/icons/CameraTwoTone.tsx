// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CameraTwoToneSvg from '@ant-design/icons-svg/lib/asn/CameraTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CameraTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CameraTwoTone: CameraTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraTwoToneSvg}></AntdIcon>;
};

CameraTwoTone.displayName = 'CameraTwoTone';
CameraTwoTone.inheritAttrs = false;
export default CameraTwoTone;