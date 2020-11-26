// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClearOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClearOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClearOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClearOutlined: ClearOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClearOutlinedSvg}></AntdIcon>;
};

ClearOutlined.displayName = 'ClearOutlined';
ClearOutlined.inheritAttrs = false;
export default ClearOutlined;