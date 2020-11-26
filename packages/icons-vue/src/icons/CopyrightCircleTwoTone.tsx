// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyrightCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyrightCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopyrightCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopyrightCircleTwoTone: CopyrightCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyrightCircleTwoToneSvg}></AntdIcon>;
};

CopyrightCircleTwoTone.displayName = 'CopyrightCircleTwoTone';
CopyrightCircleTwoTone.inheritAttrs = false;
export default CopyrightCircleTwoTone;