// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ApartmentOutlinedSvg from '@ant-design/icons-svg/lib/asn/ApartmentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ApartmentOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ApartmentOutlinedSvg}></AntdIcon>;
};

ApartmentOutlined.displayName = 'ApartmentOutlined';
ApartmentOutlined.inheritAttrs = false;
export default ApartmentOutlined;