// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BugTwoToneSvg from '@ant-design/icons-svg/lib/asn/BugTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BugTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BugTwoToneSvg}></AntdIcon>;
};

BugTwoTone.displayName = 'BugTwoTone';
BugTwoTone.inheritAttrs = false;
export default BugTwoTone;