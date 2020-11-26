// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LeftSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LeftSquareOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LeftSquareOutlined: LeftSquareOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LeftSquareOutlinedSvg}></AntdIcon>;
};

LeftSquareOutlined.displayName = 'LeftSquareOutlined';
LeftSquareOutlined.inheritAttrs = false;
export default LeftSquareOutlined;