// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SunOutlinedSvg from '@ant-design/icons-svg/lib/asn/SunOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SunOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SunOutlined: SunOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunOutlinedSvg}></AntdIcon>;
};

SunOutlined.displayName = 'SunOutlined';
SunOutlined.inheritAttrs = false;
export default SunOutlined;