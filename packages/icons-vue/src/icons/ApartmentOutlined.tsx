// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ApartmentOutlinedSvg from '@ant-design/icons-svg/lib/asn/ApartmentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ApartmentOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ApartmentOutlined: ApartmentOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ApartmentOutlinedSvg}></AntdIcon>;
};

ApartmentOutlined.displayName = 'ApartmentOutlined';
ApartmentOutlined.inheritAttrs = false;
export default ApartmentOutlined;