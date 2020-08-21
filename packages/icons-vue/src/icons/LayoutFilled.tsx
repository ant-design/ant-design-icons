// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LayoutFilledSvg from '@ant-design/icons-svg/lib/asn/LayoutFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutFilledSvg}></AntdIcon>;
};

LayoutFilled.displayName = 'LayoutFilled';
LayoutFilled.inheritAttrs = false;
export default LayoutFilled;