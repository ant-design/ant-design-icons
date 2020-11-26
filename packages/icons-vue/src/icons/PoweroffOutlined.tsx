// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PoweroffOutlinedSvg from '@ant-design/icons-svg/lib/asn/PoweroffOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PoweroffOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PoweroffOutlined: PoweroffOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PoweroffOutlinedSvg}></AntdIcon>;
};

PoweroffOutlined.displayName = 'PoweroffOutlined';
PoweroffOutlined.inheritAttrs = false;
export default PoweroffOutlined;