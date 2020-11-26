// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterOutlined: FilterOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterOutlinedSvg}></AntdIcon>;
};

FilterOutlined.displayName = 'FilterOutlined';
FilterOutlined.inheritAttrs = false;
export default FilterOutlined;