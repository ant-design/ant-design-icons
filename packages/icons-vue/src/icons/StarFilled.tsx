// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StarFilledSvg from '@ant-design/icons-svg/lib/asn/StarFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarFilledSvg}></AntdIcon>;
};

StarFilled.displayName = 'StarFilled';
StarFilled.inheritAttrs = false;
export default StarFilled;