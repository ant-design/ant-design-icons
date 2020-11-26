// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlusSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlusSquareOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlusSquareOutlined: PlusSquareOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlusSquareOutlinedSvg}></AntdIcon>;
};

PlusSquareOutlined.displayName = 'PlusSquareOutlined';
PlusSquareOutlined.inheritAttrs = false;
export default PlusSquareOutlined;