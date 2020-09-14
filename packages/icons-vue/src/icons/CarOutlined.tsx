// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CarOutlinedSvg from '@ant-design/icons-svg/lib/asn/CarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CarOutlinedSvg}></AntdIcon>;
};

CarOutlined.displayName = 'CarOutlined';
CarOutlined.inheritAttrs = false;
export default CarOutlined;