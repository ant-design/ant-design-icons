// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GroupOutlinedSvg from '@ant-design/icons-svg/lib/asn/GroupOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GroupOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GroupOutlined: GroupOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GroupOutlinedSvg}></AntdIcon>;
};

GroupOutlined.displayName = 'GroupOutlined';
GroupOutlined.inheritAttrs = false;
export default GroupOutlined;