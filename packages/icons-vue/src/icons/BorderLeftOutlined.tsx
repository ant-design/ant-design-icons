// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BorderLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BorderLeftOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BorderLeftOutlined: BorderLeftOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BorderLeftOutlinedSvg}></AntdIcon>;
};

BorderLeftOutlined.displayName = 'BorderLeftOutlined';
BorderLeftOutlined.inheritAttrs = false;
export default BorderLeftOutlined;