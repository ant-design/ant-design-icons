// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/BackwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackwardOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackwardOutlined: BackwardOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackwardOutlinedSvg}></AntdIcon>;
};

BackwardOutlined.displayName = 'BackwardOutlined';
BackwardOutlined.inheritAttrs = false;
export default BackwardOutlined;