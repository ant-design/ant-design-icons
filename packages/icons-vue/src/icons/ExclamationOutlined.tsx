// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExclamationOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExclamationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExclamationOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExclamationOutlined: ExclamationOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExclamationOutlinedSvg}></AntdIcon>;
};

ExclamationOutlined.displayName = 'ExclamationOutlined';
ExclamationOutlined.inheritAttrs = false;
export default ExclamationOutlined;