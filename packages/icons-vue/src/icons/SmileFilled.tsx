// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SmileFilledSvg from '@ant-design/icons-svg/lib/asn/SmileFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SmileFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmileFilledSvg}></AntdIcon>;
};

SmileFilled.displayName = 'SmileFilled';
SmileFilled.inheritAttrs = false;
export default SmileFilled;