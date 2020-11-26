// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SortDescendingOutlinedSvg from '@ant-design/icons-svg/lib/asn/SortDescendingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SortDescendingOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SortDescendingOutlined: SortDescendingOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SortDescendingOutlinedSvg}></AntdIcon>;
};

SortDescendingOutlined.displayName = 'SortDescendingOutlined';
SortDescendingOutlined.inheritAttrs = false;
export default SortDescendingOutlined;