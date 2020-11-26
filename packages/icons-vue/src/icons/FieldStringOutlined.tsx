// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FieldStringOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldStringOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FieldStringOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FieldStringOutlined: FieldStringOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FieldStringOutlinedSvg}></AntdIcon>;
};

FieldStringOutlined.displayName = 'FieldStringOutlined';
FieldStringOutlined.inheritAttrs = false;
export default FieldStringOutlined;