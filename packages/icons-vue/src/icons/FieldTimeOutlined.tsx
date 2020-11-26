// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FieldTimeOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldTimeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FieldTimeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FieldTimeOutlined: FieldTimeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FieldTimeOutlinedSvg}></AntdIcon>;
};

FieldTimeOutlined.displayName = 'FieldTimeOutlined';
FieldTimeOutlined.inheritAttrs = false;
export default FieldTimeOutlined;