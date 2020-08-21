// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FlagTwoToneSvg from '@ant-design/icons-svg/lib/asn/FlagTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlagTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlagTwoToneSvg}></AntdIcon>;
};

FlagTwoTone.displayName = 'FlagTwoTone';
FlagTwoTone.inheritAttrs = false;
export default FlagTwoTone;