// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CaretDownFilledSvg from '@ant-design/icons-svg/lib/asn/CaretDownFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretDownFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CaretDownFilledSvg}></AntdIcon>;
};

CaretDownFilled.displayName = 'CaretDownFilled';
CaretDownFilled.inheritAttrs = false;
export default CaretDownFilled;