// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UsergroupAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/UsergroupAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UsergroupAddOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UsergroupAddOutlined: UsergroupAddOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UsergroupAddOutlinedSvg}></AntdIcon>;
};

UsergroupAddOutlined.displayName = 'UsergroupAddOutlined';
UsergroupAddOutlined.inheritAttrs = false;
export default UsergroupAddOutlined;