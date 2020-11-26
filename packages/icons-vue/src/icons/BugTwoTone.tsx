// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BugTwoToneSvg from '@ant-design/icons-svg/lib/asn/BugTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BugTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BugTwoTone: BugTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BugTwoToneSvg}></AntdIcon>;
};

BugTwoTone.displayName = 'BugTwoTone';
BugTwoTone.inheritAttrs = false;
export default BugTwoTone;