// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SearchOutlinedSvg from '@ant-design/icons-svg/lib/asn/SearchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SearchOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchOutlinedSvg}></AntdIcon>;
};

SearchOutlined.displayName = 'SearchOutlined';
SearchOutlined.inheritAttrs = false;
export default SearchOutlined;