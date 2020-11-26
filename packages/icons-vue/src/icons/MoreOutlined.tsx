// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreOutlinedSvg from '@ant-design/icons-svg/lib/asn/MoreOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreOutlined: MoreOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreOutlinedSvg}></AntdIcon>;
};

MoreOutlined.displayName = 'MoreOutlined';
MoreOutlined.inheritAttrs = false;
export default MoreOutlined;