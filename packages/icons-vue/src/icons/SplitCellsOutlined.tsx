// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SplitCellsOutlinedSvg from '@ant-design/icons-svg/lib/asn/SplitCellsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SplitCellsOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SplitCellsOutlined: SplitCellsOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SplitCellsOutlinedSvg}></AntdIcon>;
};

SplitCellsOutlined.displayName = 'SplitCellsOutlined';
SplitCellsOutlined.inheritAttrs = false;
export default SplitCellsOutlined;