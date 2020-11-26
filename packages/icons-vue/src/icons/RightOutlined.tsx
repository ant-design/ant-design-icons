// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RightOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RightOutlined: RightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RightOutlinedSvg}></AntdIcon>;
};

RightOutlined.displayName = 'RightOutlined';
RightOutlined.inheritAttrs = false;
export default RightOutlined;