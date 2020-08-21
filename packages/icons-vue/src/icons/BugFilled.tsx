// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BugFilledSvg from '@ant-design/icons-svg/lib/asn/BugFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BugFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BugFilledSvg}></AntdIcon>;
};

BugFilled.displayName = 'BugFilled';
BugFilled.inheritAttrs = false;
export default BugFilled;