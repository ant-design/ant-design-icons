// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MacCommandOutlinedSvg from '@ant-design/icons-svg/lib/asn/MacCommandOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MacCommandOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MacCommandOutlined: MacCommandOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MacCommandOutlinedSvg}></AntdIcon>;
};

MacCommandOutlined.displayName = 'MacCommandOutlined';
MacCommandOutlined.inheritAttrs = false;
export default MacCommandOutlined;