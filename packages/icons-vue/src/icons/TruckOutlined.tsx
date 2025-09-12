// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckOutlinedSvg from '@ant-design/icons-svg/lib/asn/TruckOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckOutlined: TruckOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckOutlinedSvg}></AntdIcon>;
};

TruckOutlined.displayName = 'TruckOutlined';
TruckOutlined.inheritAttrs = false;
export default TruckOutlined;