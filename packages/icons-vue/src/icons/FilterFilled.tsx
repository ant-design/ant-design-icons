// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FilterFilledSvg from '@ant-design/icons-svg/lib/asn/FilterFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilterFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterFilledSvg}></AntdIcon>;
};

FilterFilled.displayName = 'FilterFilled';
FilterFilled.inheritAttrs = false;
export default FilterFilled;