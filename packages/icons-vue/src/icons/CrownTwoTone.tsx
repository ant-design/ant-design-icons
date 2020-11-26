// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CrownTwoToneSvg from '@ant-design/icons-svg/lib/asn/CrownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CrownTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CrownTwoTone: CrownTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CrownTwoToneSvg}></AntdIcon>;
};

CrownTwoTone.displayName = 'CrownTwoTone';
CrownTwoTone.inheritAttrs = false;
export default CrownTwoTone;