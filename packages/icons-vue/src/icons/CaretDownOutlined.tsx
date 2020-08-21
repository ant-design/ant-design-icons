// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CaretDownOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretDownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretDownOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CaretDownOutlinedSvg}></AntdIcon>;
};

CaretDownOutlined.displayName = 'CaretDownOutlined';
CaretDownOutlined.inheritAttrs = false;
export default CaretDownOutlined;