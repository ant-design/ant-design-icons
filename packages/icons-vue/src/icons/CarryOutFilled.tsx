// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CarryOutFilledSvg from '@ant-design/icons-svg/lib/asn/CarryOutFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarryOutFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CarryOutFilledSvg}></AntdIcon>;
};

CarryOutFilled.displayName = 'CarryOutFilled';
CarryOutFilled.inheritAttrs = false;
export default CarryOutFilled;