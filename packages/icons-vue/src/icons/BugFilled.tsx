// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BugFilledSvg from '@ant-design/icons-svg/lib/asn/BugFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BugFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BugFilled: BugFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BugFilledSvg}></AntdIcon>;
};

BugFilled.displayName = 'BugFilled';
BugFilled.inheritAttrs = false;
export default BugFilled;