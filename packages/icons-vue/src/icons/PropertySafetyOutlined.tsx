// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PropertySafetyOutlinedSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PropertySafetyOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PropertySafetyOutlined: PropertySafetyOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PropertySafetyOutlinedSvg}></AntdIcon>;
};

PropertySafetyOutlined.displayName = 'PropertySafetyOutlined';
PropertySafetyOutlined.inheritAttrs = false;
export default PropertySafetyOutlined;