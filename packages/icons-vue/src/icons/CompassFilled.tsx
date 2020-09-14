// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CompassFilledSvg from '@ant-design/icons-svg/lib/asn/CompassFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompassFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CompassFilledSvg}></AntdIcon>;
};

CompassFilled.displayName = 'CompassFilled';
CompassFilled.inheritAttrs = false;
export default CompassFilled;