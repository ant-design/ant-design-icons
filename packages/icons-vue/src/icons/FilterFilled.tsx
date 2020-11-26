// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterFilledSvg from '@ant-design/icons-svg/lib/asn/FilterFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterFilled: FilterFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterFilledSvg}></AntdIcon>;
};

FilterFilled.displayName = 'FilterFilled';
FilterFilled.inheritAttrs = false;
export default FilterFilled;