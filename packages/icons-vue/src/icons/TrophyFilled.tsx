// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TrophyFilledSvg from '@ant-design/icons-svg/lib/asn/TrophyFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrophyFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrophyFilledSvg}></AntdIcon>;
};

TrophyFilled.displayName = 'TrophyFilled';
TrophyFilled.inheritAttrs = false;
export default TrophyFilled;