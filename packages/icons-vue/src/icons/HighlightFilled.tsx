// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HighlightFilledSvg from '@ant-design/icons-svg/lib/asn/HighlightFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HighlightFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HighlightFilledSvg}></AntdIcon>;
};

HighlightFilled.displayName = 'HighlightFilled';
HighlightFilled.inheritAttrs = false;
export default HighlightFilled;