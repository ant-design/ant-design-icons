// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FrownFilledSvg from '@ant-design/icons-svg/lib/asn/FrownFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FrownFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FrownFilled: FrownFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FrownFilledSvg}></AntdIcon>;
};

FrownFilled.displayName = 'FrownFilled';
FrownFilled.inheritAttrs = false;
export default FrownFilled;