// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FrownOutlinedSvg from '@ant-design/icons-svg/lib/asn/FrownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FrownOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FrownOutlined: FrownOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FrownOutlinedSvg}></AntdIcon>;
};

FrownOutlined.displayName = 'FrownOutlined';
FrownOutlined.inheritAttrs = false;
export default FrownOutlined;