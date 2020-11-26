// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyrightTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyrightTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopyrightTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopyrightTwoTone: CopyrightTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyrightTwoToneSvg}></AntdIcon>;
};

CopyrightTwoTone.displayName = 'CopyrightTwoTone';
CopyrightTwoTone.inheritAttrs = false;
export default CopyrightTwoTone;