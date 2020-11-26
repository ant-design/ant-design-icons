// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExpandAltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExpandAltOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExpandAltOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExpandAltOutlined: ExpandAltOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExpandAltOutlinedSvg}></AntdIcon>;
};

ExpandAltOutlined.displayName = 'ExpandAltOutlined';
ExpandAltOutlined.inheritAttrs = false;
export default ExpandAltOutlined;