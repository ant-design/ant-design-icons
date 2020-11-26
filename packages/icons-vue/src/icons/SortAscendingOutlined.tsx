// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SortAscendingOutlinedSvg from '@ant-design/icons-svg/lib/asn/SortAscendingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SortAscendingOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SortAscendingOutlined: SortAscendingOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SortAscendingOutlinedSvg}></AntdIcon>;
};

SortAscendingOutlined.displayName = 'SortAscendingOutlined';
SortAscendingOutlined.inheritAttrs = false;
export default SortAscendingOutlined;