// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BorderBottomOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderBottomOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BorderBottomOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BorderBottomOutlined: BorderBottomOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BorderBottomOutlinedSvg}></AntdIcon>;
};

BorderBottomOutlined.displayName = 'BorderBottomOutlined';
BorderBottomOutlined.inheritAttrs = false;
export default BorderBottomOutlined;