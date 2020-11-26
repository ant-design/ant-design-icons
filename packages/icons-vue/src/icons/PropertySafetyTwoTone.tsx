// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PropertySafetyTwoToneSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PropertySafetyTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PropertySafetyTwoTone: PropertySafetyTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PropertySafetyTwoToneSvg}></AntdIcon>;
};

PropertySafetyTwoTone.displayName = 'PropertySafetyTwoTone';
PropertySafetyTwoTone.inheritAttrs = false;
export default PropertySafetyTwoTone;