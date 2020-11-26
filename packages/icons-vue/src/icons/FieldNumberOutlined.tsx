// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FieldNumberOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldNumberOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FieldNumberOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FieldNumberOutlined: FieldNumberOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FieldNumberOutlinedSvg}></AntdIcon>;
};

FieldNumberOutlined.displayName = 'FieldNumberOutlined';
FieldNumberOutlined.inheritAttrs = false;
export default FieldNumberOutlined;