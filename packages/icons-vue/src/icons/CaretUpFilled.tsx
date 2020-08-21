// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CaretUpFilledSvg from '@ant-design/icons-svg/lib/asn/CaretUpFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretUpFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CaretUpFilledSvg}></AntdIcon>;
};

CaretUpFilled.displayName = 'CaretUpFilled';
CaretUpFilled.inheritAttrs = false;
export default CaretUpFilled;