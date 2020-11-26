// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RetweetOutlinedSvg from '@ant-design/icons-svg/lib/asn/RetweetOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RetweetOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RetweetOutlined: RetweetOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RetweetOutlinedSvg}></AntdIcon>;
};

RetweetOutlined.displayName = 'RetweetOutlined';
RetweetOutlined.inheritAttrs = false;
export default RetweetOutlined;