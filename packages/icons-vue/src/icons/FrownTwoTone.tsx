// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FrownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FrownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FrownTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FrownTwoTone: FrownTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FrownTwoToneSvg}></AntdIcon>;
};

FrownTwoTone.displayName = 'FrownTwoTone';
FrownTwoTone.inheritAttrs = false;
export default FrownTwoTone;