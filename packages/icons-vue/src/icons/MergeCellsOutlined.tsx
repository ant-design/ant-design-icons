// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MergeCellsOutlinedSvg from '@ant-design/icons-svg/lib/asn/MergeCellsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MergeCellsOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MergeCellsOutlined: MergeCellsOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MergeCellsOutlinedSvg}></AntdIcon>;
};

MergeCellsOutlined.displayName = 'MergeCellsOutlined';
MergeCellsOutlined.inheritAttrs = false;
export default MergeCellsOutlined;