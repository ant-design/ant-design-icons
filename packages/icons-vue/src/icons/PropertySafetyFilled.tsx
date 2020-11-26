// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PropertySafetyFilledSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PropertySafetyFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PropertySafetyFilled: PropertySafetyFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PropertySafetyFilledSvg}></AntdIcon>;
};

PropertySafetyFilled.displayName = 'PropertySafetyFilled';
PropertySafetyFilled.inheritAttrs = false;
export default PropertySafetyFilled;