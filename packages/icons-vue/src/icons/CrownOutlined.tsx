// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CrownOutlinedSvg from '@ant-design/icons-svg/lib/asn/CrownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CrownOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CrownOutlined: CrownOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CrownOutlinedSvg}></AntdIcon>;
};

CrownOutlined.displayName = 'CrownOutlined';
CrownOutlined.inheritAttrs = false;
export default CrownOutlined;