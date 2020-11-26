// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopyTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopyTwoTone: CopyTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyTwoToneSvg}></AntdIcon>;
};

CopyTwoTone.displayName = 'CopyTwoTone';
CopyTwoTone.inheritAttrs = false;
export default CopyTwoTone;