// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BorderlessTableOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderlessTableOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BorderlessTableOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BorderlessTableOutlined: BorderlessTableOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BorderlessTableOutlinedSvg}></AntdIcon>;
};

BorderlessTableOutlined.displayName = 'BorderlessTableOutlined';
BorderlessTableOutlined.inheritAttrs = false;
export default BorderlessTableOutlined;