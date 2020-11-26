// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DribbbleSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/DribbbleSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DribbbleSquareOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DribbbleSquareOutlined: DribbbleSquareOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DribbbleSquareOutlinedSvg}></AntdIcon>;
};

DribbbleSquareOutlined.displayName = 'DribbbleSquareOutlined';
DribbbleSquareOutlined.inheritAttrs = false;
export default DribbbleSquareOutlined;