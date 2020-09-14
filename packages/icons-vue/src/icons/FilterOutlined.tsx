// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FilterOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilterOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterOutlinedSvg}></AntdIcon>;
};

FilterOutlined.displayName = 'FilterOutlined';
FilterOutlined.inheritAttrs = false;
export default FilterOutlined;