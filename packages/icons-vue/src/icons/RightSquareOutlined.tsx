// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RightSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RightSquareOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RightSquareOutlined: RightSquareOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RightSquareOutlinedSvg}></AntdIcon>;
};

RightSquareOutlined.displayName = 'RightSquareOutlined';
RightSquareOutlined.inheritAttrs = false;
export default RightSquareOutlined;