// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SearchOutlinedSvg from '@ant-design/icons-svg/lib/asn/SearchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SearchOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SearchOutlined: SearchOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchOutlinedSvg}></AntdIcon>;
};

SearchOutlined.displayName = 'SearchOutlined';
SearchOutlined.inheritAttrs = false;
export default SearchOutlined;