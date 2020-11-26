// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilterTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilterTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilterTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilterTwoTone: FilterTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterTwoToneSvg}></AntdIcon>;
};

FilterTwoTone.displayName = 'FilterTwoTone';
FilterTwoTone.inheritAttrs = false;
export default FilterTwoTone;