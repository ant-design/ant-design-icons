// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BuildFilledSvg from '@ant-design/icons-svg/lib/asn/BuildFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BuildFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuildFilledSvg}></AntdIcon>;
};

BuildFilled.displayName = 'BuildFilled';
BuildFilled.inheritAttrs = false;
export default BuildFilled;