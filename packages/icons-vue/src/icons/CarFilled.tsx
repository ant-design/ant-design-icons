// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CarFilledSvg from '@ant-design/icons-svg/lib/asn/CarFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CarFilledSvg}></AntdIcon>;
};

CarFilled.displayName = 'CarFilled';
CarFilled.inheritAttrs = false;
export default CarFilled;