// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FieldBinaryOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldBinaryOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FieldBinaryOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FieldBinaryOutlined: FieldBinaryOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FieldBinaryOutlinedSvg}></AntdIcon>;
};

FieldBinaryOutlined.displayName = 'FieldBinaryOutlined';
FieldBinaryOutlined.inheritAttrs = false;
export default FieldBinaryOutlined;