// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CaretRightFilledSvg from '@ant-design/icons-svg/lib/asn/CaretRightFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretRightFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CaretRightFilledSvg}></AntdIcon>;
};

CaretRightFilled.displayName = 'CaretRightFilled';
CaretRightFilled.inheritAttrs = false;
export default CaretRightFilled;