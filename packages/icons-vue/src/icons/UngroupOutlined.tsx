// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UngroupOutlinedSvg from '@ant-design/icons-svg/lib/asn/UngroupOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UngroupOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UngroupOutlined: UngroupOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UngroupOutlinedSvg}></AntdIcon>;
};

UngroupOutlined.displayName = 'UngroupOutlined';
UngroupOutlined.inheritAttrs = false;
export default UngroupOutlined;