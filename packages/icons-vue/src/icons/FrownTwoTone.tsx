// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FrownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FrownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FrownTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FrownTwoToneSvg}></AntdIcon>;
};

FrownTwoTone.displayName = 'FrownTwoTone';
FrownTwoTone.inheritAttrs = false;
export default FrownTwoTone;