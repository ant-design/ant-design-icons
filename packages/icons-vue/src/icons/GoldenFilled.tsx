// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GoldenFilledSvg from '@ant-design/icons-svg/lib/asn/GoldenFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoldenFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GoldenFilledSvg}></AntdIcon>;
};

GoldenFilled.displayName = 'GoldenFilled';
GoldenFilled.inheritAttrs = false;
export default GoldenFilled;