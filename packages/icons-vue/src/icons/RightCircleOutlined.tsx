// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RightCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RightCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RightCircleOutlined: RightCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RightCircleOutlinedSvg}></AntdIcon>;
};

RightCircleOutlined.displayName = 'RightCircleOutlined';
RightCircleOutlined.inheritAttrs = false;
export default RightCircleOutlined;