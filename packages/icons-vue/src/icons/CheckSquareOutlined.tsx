// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CheckSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CheckSquareOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CheckSquareOutlined: CheckSquareOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckSquareOutlinedSvg}></AntdIcon>;
};

CheckSquareOutlined.displayName = 'CheckSquareOutlined';
CheckSquareOutlined.inheritAttrs = false;
export default CheckSquareOutlined;