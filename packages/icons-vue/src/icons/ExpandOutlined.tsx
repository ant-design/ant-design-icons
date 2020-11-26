// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExpandOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExpandOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExpandOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExpandOutlined: ExpandOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExpandOutlinedSvg}></AntdIcon>;
};

ExpandOutlined.displayName = 'ExpandOutlined';
ExpandOutlined.inheritAttrs = false;
export default ExpandOutlined;