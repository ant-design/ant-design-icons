// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BugOutlinedSvg from '@ant-design/icons-svg/lib/asn/BugOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BugOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BugOutlined: BugOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BugOutlinedSvg}></AntdIcon>;
};

BugOutlined.displayName = 'BugOutlined';
BugOutlined.inheritAttrs = false;
export default BugOutlined;