// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UpSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UpSquareOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UpSquareOutlined: UpSquareOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UpSquareOutlinedSvg}></AntdIcon>;
};

UpSquareOutlined.displayName = 'UpSquareOutlined';
UpSquareOutlined.inheritAttrs = false;
export default UpSquareOutlined;