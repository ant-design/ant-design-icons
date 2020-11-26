// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CrownFilledSvg from '@ant-design/icons-svg/lib/asn/CrownFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CrownFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CrownFilled: CrownFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CrownFilledSvg}></AntdIcon>;
};

CrownFilled.displayName = 'CrownFilled';
CrownFilled.inheritAttrs = false;
export default CrownFilled;