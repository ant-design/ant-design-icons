// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BorderRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BorderRightOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BorderRightOutlined: BorderRightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BorderRightOutlinedSvg}></AntdIcon>;
};

BorderRightOutlined.displayName = 'BorderRightOutlined';
BorderRightOutlined.inheritAttrs = false;
export default BorderRightOutlined;