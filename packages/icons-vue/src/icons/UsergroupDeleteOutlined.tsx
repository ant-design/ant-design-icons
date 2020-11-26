// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UsergroupDeleteOutlinedSvg from '@ant-design/icons-svg/lib/asn/UsergroupDeleteOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UsergroupDeleteOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UsergroupDeleteOutlined: UsergroupDeleteOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UsergroupDeleteOutlinedSvg}></AntdIcon>;
};

UsergroupDeleteOutlined.displayName = 'UsergroupDeleteOutlined';
UsergroupDeleteOutlined.inheritAttrs = false;
export default UsergroupDeleteOutlined;