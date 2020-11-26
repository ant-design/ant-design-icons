// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DownSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DownSquareOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DownSquareOutlined: DownSquareOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DownSquareOutlinedSvg}></AntdIcon>;
};

DownSquareOutlined.displayName = 'DownSquareOutlined';
DownSquareOutlined.inheritAttrs = false;
export default DownSquareOutlined;