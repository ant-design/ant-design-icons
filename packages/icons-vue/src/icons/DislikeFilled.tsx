// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DislikeFilledSvg from '@ant-design/icons-svg/lib/asn/DislikeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DislikeFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DislikeFilledSvg}></AntdIcon>;
};

DislikeFilled.displayName = 'DislikeFilled';
DislikeFilled.inheritAttrs = false;
export default DislikeFilled;