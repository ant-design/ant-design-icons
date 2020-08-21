// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FrownFilledSvg from '@ant-design/icons-svg/lib/asn/FrownFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FrownFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FrownFilledSvg}></AntdIcon>;
};

FrownFilled.displayName = 'FrownFilled';
FrownFilled.inheritAttrs = false;
export default FrownFilled;